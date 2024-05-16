import { create } from 'zustand';

interface OnboardingStepState {
  currentStep: number;
  setPrevStep: () => void;
  setNextStep: () => void;

  currentChips: string[];
  setCurrentChips: (chips: string[]) => void;
  // getCurrentChips: () => string[];
}

const initialStep = { currentStep: 0, currentChips: [] };

export const useStepStore = create<OnboardingStepState>((set) => ({
  currentStep: initialStep.currentStep,
  currentChips: initialStep.currentChips,

  setPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  setNextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),
  setCurrentChips: (chips) => set({ currentChips: chips }),
}));

export default useStepStore;
