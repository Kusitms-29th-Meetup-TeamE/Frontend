'use client';

import OnboardingModal from '../../onboarding/OnboardingModal';
import ErrorModal from './ErrorModal';
import { useGlobalModal } from './GlobalModalContext';
import SuccessModal from './SuccessModal';

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
    </>
  );
}
