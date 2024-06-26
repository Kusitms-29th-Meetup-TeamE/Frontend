import { Dispatch, SetStateAction } from 'react';

export type ChipProps = {
  className?: string;
  size?: string;
  text?: string;
  type?: string;
  isBtn?: boolean;
  focusType?: string;
  initialChip?: string;
  handleSelect?: Dispatch<SetStateAction<string>>;
  isPersonality?: boolean;
  isSelected?: boolean;
};
