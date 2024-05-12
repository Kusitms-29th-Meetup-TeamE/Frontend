import create from 'zustand';

interface SelectedJoinChipState {
  currentChips: string[];
  setCurrentChips: (chip: string) => void;
  getCurrentChips: () => string[];
}

const initialChip = { currentChips: [] };

export const useSelectedJoinChipStore = create<SelectedJoinChipState>(
  (set, get) => ({
    currentChips: initialChip.currentChips,

    setCurrentChips: (newChip: string) =>
      set((state) => {
        const currentChips = [...state.currentChips];

        if (!currentChips.includes(newChip)) {
          currentChips.push(newChip); // 선택돼있지 않은 경우 선택
          return { currentChips };
        } else {
          const filteredChips = currentChips.filter((chip) => chip !== newChip); // 선택돼있는 경우 선택 해제
          return { currentChips: filteredChips };
        }
      }),

    getCurrentChips: () => get().currentChips,
  }),
);

export default useSelectedJoinChipStore;
