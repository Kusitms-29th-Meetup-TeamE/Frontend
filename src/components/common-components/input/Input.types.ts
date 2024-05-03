export type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  size: InputSize;
  textSize: InputSize;
  shape: InputShape;
  backgroundColors: InputColor;
  search?: boolean;
  className?: string;
  defaultValue?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const inputSizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;
export type InputSize = (typeof inputSizes)[keyof typeof inputSizes];

export const inputShapes = {
  square: 'square',
  rounded: 'rounded',
} as const;
export type InputShape = (typeof inputShapes)[keyof typeof inputShapes];

export const inputColors = {
  white: 'white',
} as const;
export type InputColor = (typeof inputColors)[keyof typeof inputColors];
