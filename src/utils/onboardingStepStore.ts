import create from 'zustand';

interface OnboardingStepState {
  currentStep: number;
  setPrevStep: () => void;
  setNextStep: () => void;
}

const initialStep = { currentStep: 0 };

export const useStepStore = create<OnboardingStepState>((set) => ({
  currentStep: initialStep.currentStep,

  setPrevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  setNextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),
}));

export default useStepStore;
