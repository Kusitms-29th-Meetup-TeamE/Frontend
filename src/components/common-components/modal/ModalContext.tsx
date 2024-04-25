'use client';

import { createContext, useContext } from 'react';

const ModalContext = createContext<boolean | null>(null);
ModalContext.displayName = 'ModalContext';

export function ModalProvider({ children }: { children: React.ReactNode }) {
  return <ModalContext.Provider value>{children}</ModalContext.Provider>;
}

export function useModalContext() {
  const context = useContext(ModalContext);
  return context;
}
