import { PropsWithChildren, forwardRef } from 'react';

import {
  ButtonColor,
  ButtonProps,
  ButtonShape,
  ButtonSize,
} from './Button.types';

import clsx from 'clsx';

const style: {
  base: string;
  size: Record<ButtonSize, string>;
  shape: Record<ButtonShape, string>;
  color: Record<ButtonColor, string>;
} = {
  base: 'inline-flex items-center justify-center box-border select-none m-0 p-0 w-fit h-fit border cursor-pointer align-middle disabled:cursor-default',
  size: {
    xs: 'min-h-[30px] px-[14px] py-[10px] text-body3 gap-[4px]',
    sm: 'min-h-[40px] px-[34px] py-[10px] text-body1 gap-[6px]',
    md: 'min-h-[48px] px-[53px] py-[10px] text-body1 gap-[6px]',
    lg: 'min-h-[50px] px-[60px] py-[10px] text-body1 gap-2',
    xl: 'w-full !flex',
  },
  shape: {
    square: 'rounded-[20px]',
    rounded: 'rounded-full',
  },
  color: {
    active: 'text-white',
    default: 'bg-primary-orange6 text-white',
    border: '',
    gray: 'bg-gray-03 text-gray-07',
  },
};

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const {
      size = 'md',
      shape = 'rounded',
      color = 'default',
      startIcon,
      endIcon,
      className,
      children,
      ...rest
    } = props;

    return (
      <button
        type="button"
        ref={ref}
        className={clsx(
          style.base,
          style.shape[shape],
          style.size[size],
          style.color[color],
          className,
        )}
        {...rest}
      >
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
