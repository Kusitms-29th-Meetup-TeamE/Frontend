import { create } from 'zustand';

interface SelectedLearningChipState {
  currentLearningChip: string;
  setCurrentLearningChip: (chip: string) => void;
  getCurrentLearningChip: () => string;
}

const initialChip = { currentLearningChip: '전체', isInit: false };

export const useSelectedLearningChipStore = create<SelectedLearningChipState>(
  (set, get) => ({
    currentLearningChip: initialChip.currentLearningChip,

    setCurrentLearningChip: (newChip: string) =>
      set((state) => ({ ...state, currentLearningChip: newChip })),

    getCurrentLearningChip: () => get().currentLearningChip,
  }),
);

export default useSelectedLearningChipStore;
