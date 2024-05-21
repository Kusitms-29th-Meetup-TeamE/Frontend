export type SelectBoxProps = {
  items: SelectItemType[];
  // selectedItem: string;
  setParams: (text: string | number) => void;
  size?: SelectBoxSize;
  className?: string;
  initText?: string;
};

export const selectBoxSizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;
export type SelectBoxSize =
  (typeof selectBoxSizes)[keyof typeof selectBoxSizes];

export type SelectItemType = {
  id: number;
  text: string;
  value: string | number;
};
