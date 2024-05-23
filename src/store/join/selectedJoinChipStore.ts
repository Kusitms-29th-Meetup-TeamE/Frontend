import { agentItmes, personalityItmes } from '@/constants/object';

import { create } from 'zustand';

interface SelectedJoinChipState {
  currentAgency: string[];
  currentPersonality: string[];
  isInit: boolean;
  initChips: (initialPersonalities: string[]) => void;
  setCurrentChips: (chip: string) => void;
  getCurrentAgency: () => string[];
  getCurretPersonality: () => string[];
}

const initialChip = {
  currentAgency: ['전체'],
  currentPersonality: [],
  isInit: false,
};

export const useSelectedJoinChipStore = create<SelectedJoinChipState>(
  (set, get) => ({
    currentAgency: initialChip.currentAgency,
    currentPersonality: initialChip.currentPersonality,
    isInit: initialChip.isInit,

    initChips: (initialPersonalities: string[]) =>
      set(() => ({
        currentAgency: initialChip.currentAgency,
        currentPersonality:
          initialPersonalities || initialChip.currentPersonality,
        isInit: true,
      })),

    setCurrentChips: (newChip: string) =>
      set((state) => {
        const currentAgency = [...state.currentAgency];
        const currentPersonality = [...state.currentPersonality];

        // 활동 기관 / 활동 성격의 종류 구분
        const isAgency = agentItmes.includes(newChip);

        if (isAgency) {
          // 활동 기관 선택 경우
          if (newChip === '전체') {
            // '전체' 선택 시 다른 칩들을 모두 제거하고 '전체'만 남김
            return {
              currentAgency: initialChip.currentAgency,
              currentPersonality,
              isInit: false,
            };
          } else if (currentAgency.includes('전체')) {
            // '전체'가 선택된 상태에서 다른 기관 선택 시 '전체' 제거하고 선택한 기관 추가
            const filteredAgency = currentAgency.filter(
              (chip) => chip !== '전체',
            );
            filteredAgency.push(newChip);
            return {
              currentAgency: filteredAgency,
              currentPersonality,
              isInit: false,
            };
          } else {
            // 이미 선택된 기관이 있는 경우 해당 기관 선택/해제
            if (currentAgency.includes(newChip)) {
              const filteredAgency = currentAgency.filter(
                (chip) => chip !== newChip,
              );
              return {
                currentAgency: filteredAgency,
                currentPersonality,
                isInit: false,
              };
            } else {
              currentAgency.push(newChip);
              return { currentAgency, currentPersonality, isInit: false };
            }
          }
        } else {
          if (!currentPersonality.includes(newChip)) {
            currentPersonality.push(newChip); // 선택돼있지 않은 경우 선택
            return { currentAgency, currentPersonality, isInit: false };
          } else {
            const filteredPersonality = currentPersonality.filter(
              (chip) => chip !== newChip,
            ); // 선택돼있는 경우 선택 해제
            return {
              currentAgency,
              currentPersonality: filteredPersonality,
              isInit: false,
            };
          }
        }
      }),

    getCurrentAgency: () => get().currentAgency,
    getCurretPersonality: () => get().currentPersonality,
  }),
);

export default useSelectedJoinChipStore;
