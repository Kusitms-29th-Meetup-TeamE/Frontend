import { Dispatch, SetStateAction } from 'react';

export type ChipProps = {
  className?: string;
  size?: string;
  text?: string;
  type?: string;
  isBtn?: boolean;
  initialChip?: string;
  handleSelect?: Dispatch<SetStateAction<string>>;
  isPersonality?: boolean;
  isActivity?: boolean;
  // isLearning?: boolean;
  isSelected?: boolean;
};
