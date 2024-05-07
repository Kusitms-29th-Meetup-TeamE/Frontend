export type SelectBoxProps = {
  items: SelectItemType[];
  // selectedItem: string;
  setParams: (text: string) => void;
  size: DropdownSize;
  className?: string;
};

export const dropdownSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;
export type DropdownSize = (typeof dropdownSizes)[keyof typeof dropdownSizes];

export type SelectItemType = {
  id: number;
  text: string;
  value: string;
};
