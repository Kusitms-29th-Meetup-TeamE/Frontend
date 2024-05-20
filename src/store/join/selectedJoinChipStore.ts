import { agentItmes, personalityItmes } from '@/constants/object';

import { create } from 'zustand';

interface SelectedJoinChipState {
  currentAgency: string[];
  currentPersonality: string[];
  isInit: boolean;
  initChips: () => void;
  setCurrentChips: (chip: string) => void;
  getCurrentAgency: () => string[];
  getCurretPersonality: () => string[];
}

const initialChip = {
  currentAgency: ['전체'],
  currentPersonality: personalityItmes,
  isInit: false,
};

export const useSelectedJoinChipStore = create<SelectedJoinChipState>(
  (set, get) => ({
    currentAgency: initialChip.currentAgency,
    currentPersonality: initialChip.currentPersonality,
    isInit: initialChip.isInit,

    initChips: () =>
      set(() => ({
        currentAgency: initialChip.currentAgency,
        currentPersonality: initialChip.currentPersonality,
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
          if (!currentAgency.includes(newChip)) {
            currentAgency.push(newChip); // 선택돼있지 않은 경우 선택
            return { currentAgency, currentPersonality, isInit: false };
          } else {
            const filteredAgency = currentAgency.filter(
              (chip) => chip !== newChip,
            ); // 선택돼있는 경우 선택 해제
            return {
              currentAgency: filteredAgency,
              currentPersonality,
              isInit: false,
            };
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
