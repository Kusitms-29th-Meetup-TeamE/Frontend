import { Dispatch, SetStateAction } from 'react';

export interface ModalDefaultProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
