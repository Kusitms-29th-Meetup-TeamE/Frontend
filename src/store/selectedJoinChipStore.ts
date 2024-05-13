import create from 'zustand';

interface SelectedJoinChipState {
  currentChips: string[];
  isInit: boolean;
  initCurrentChips: () => void;
  setCurrentChips: (chip: string) => void;
  getCurrentChips: () => string[];
}

const initialChip = { currentChips: [], isInit: false };

export const useSelectedJoinChipStore = create<SelectedJoinChipState>(
  (set, get) => ({
    currentChips: initialChip.currentChips,
    isInit: initialChip.isInit,

    initCurrentChips: () =>
      set(() => ({ currentChips: initialChip.currentChips, isInit: true })),

    setCurrentChips: (newChip: string) =>
      set((state) => {
        const currentChips = [...state.currentChips];

        if (!currentChips.includes(newChip)) {
          currentChips.push(newChip); // 선택돼있지 않은 경우 선택
          return { currentChips, isInit: false };
        } else {
          const filteredChips = currentChips.filter((chip) => chip !== newChip); // 선택돼있는 경우 선택 해제
          return { currentChips: filteredChips, isInit: false };
        }
      }),

    getCurrentChips: () => get().currentChips,
  }),
);

export default useSelectedJoinChipStore;
