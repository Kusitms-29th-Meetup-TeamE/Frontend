export type SelectBoxProps = {
  items: SelectItemType[];
  // selectedItem: string;
  setParams: (text: string) => void;
  size: SelectBoxSize;
  className?: string;
};

export const selectBoxSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;
export type SelectBoxSize =
  (typeof selectBoxSizes)[keyof typeof selectBoxSizes];

export type SelectItemType = {
  id: number;
  text: string;
  value: string;
};
