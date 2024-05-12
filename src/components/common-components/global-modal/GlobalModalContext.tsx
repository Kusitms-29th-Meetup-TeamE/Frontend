'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  ErrorModalProps,
  SuccessModalProps,
} from './GlobalModal.types';

const initialGlobalModalState = {
  successModal: {
    open: false,
    text: '',
  },
  errorModal: {
    open: false,
    text: '',
  },
  setSuccessModal: () => {},
  setErrorModal: () => {},
};

const GlobalModalContext = createContext<{
  successModal: SuccessModalProps;
  errorModal: ErrorModalProps;
  setSuccessModal: Dispatch<SetStateAction<SuccessModalProps>>;
  setErrorModal: Dispatch<SetStateAction<ErrorModalProps>>;
}>(initialGlobalModalState);

GlobalModalContext.displayName = 'GlobalModalContext';

export function GlobalModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [successModal, setSuccessModal] = useState<SuccessModalProps>({
    open: false,
    text: '',
  });

  const [errorModal, setErrorModal] = useState<ErrorModalProps>({
    open: false,
    text: '',
  });

  const value = useMemo(
    () => ({
      successModal,
      errorModal,
      setSuccessModal,
      setErrorModal,
    }),
    [
      successModal,
      errorModal,
      setSuccessModal,
      setErrorModal,
    ],
  );

  return (
    <GlobalModalContext.Provider value={value}>
      {children}
    </GlobalModalContext.Provider>
  );
}

export function useGlobalModal() {
  const context = useContext(GlobalModalContext);

  if (!context) {
    throw new Error(
      'useGlobalModal은 GlobalModalContext 내에서 사용되어야 한다.',
    );
  }
  return context;
}
