export type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  size?: InputSize;
  shape: InputShape;
  search?: boolean;
  className?: string;
  defaultValue?: string | number;
  startIcon?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'className'>;

export const inputSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;
export type InputSize = (typeof inputSizes)[keyof typeof inputSizes];

export const inputShapes = {
  square: 'square',
  rounded: 'rounded',
} as const;
export type InputShape = (typeof inputShapes)[keyof typeof inputShapes];
