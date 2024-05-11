'use client';

import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';
import { useGlobalModal } from './GlobalModalContext';
import OnboardingModal from './OnboardingModal';

export default function GlobalModal() {
  const modalContext = useGlobalModal();

  return (
    <>
      <SuccessModal
        modalState={modalContext.successModal}
        setModalState={modalContext.setSuccessModal}
      />
      <ErrorModal
        modalState={modalContext.errorModal}
        setModalState={modalContext.setErrorModal}
      />
      <OnboardingModal
        modalState={modalContext.onboardingModal}
        setModalState={modalContext.setOnboardingModal}
      />
    </>
  );
}
