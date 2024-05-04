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
  base: 'inline-flex items-center justify-center box-border select-none m-0 p-0 w-fit h-fit cursor-pointer disabled:cursor-default',
  size: {
    sm: '',
    md: '',
    lg: 'w-full max-w-[216px] h-[54px] py-3 text-h3', // 이전, 다음 버튼
    xl: 'w-full max-w-[588px] !flex h-[68px] text-body2', // 로그인
  },
  shape: {
    square: 'rounded-[20px]',
    rounded: 'rounded-full',
  },
  color: {
    active: 'text-white',
    default: 'bg-primary-orange6 text-white',
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
