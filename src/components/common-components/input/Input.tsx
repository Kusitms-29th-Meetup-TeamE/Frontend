import { forwardRef, PropsWithChildren, useState } from 'react';

import { InputProps, InputSize, InputShape, InputColor } from '.';

import clsx from 'clsx';

const style: {
  base: string;
  sizes: Record<InputSize, string>;
  textSizes: Record<InputSize, string>;
  shapes: Record<InputShape, string>;
  backgroundColors: Record<InputColor, string>;
} = {
  // TODO: 디자인 시스템 확정 후 수정 필요
  base: 'border border-gray-05 placeholder:text-gray-06 focus:outline-none',
  sizes: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: 'px-7 py-5 max-h-[68px]', // 로그인
  },
  textSizes: {
    xs: 'text-body2',
    sm: '',
    md: 'text-body1',
    lg: 'text-h2',
    xl: 'text-h3',
  },
  shapes: {
    square: 'rounded-[20px]',
    rounded: 'rounded-[30px]',
  },

  backgroundColors: {
    white: 'bg-white',
  },
};

const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (props, ref) => {
    const {
      onChange,
      placeholder,
      onKeyDown,
      defaultValue = '',
      size,
      textSize,
      shape,
      backgroundColors,
      className,
      search,
      startIcon,
      endIcon,
    } = props;

    const [value, setValue] = useState(defaultValue);

    return (
      <div className="relative">
        {search && (
          //   <SearchIcon
          //     className="absolute top-[12px] left-[18px] text-gray-60"
          //     sx={{ fontSize: 26.1 }}
          //   />
          <></>
        )}
        {/* TODO: icon 여부 판단해서 수정하기 */}
        {startIcon && <></>}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange?.(e);
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            className,
            style.textSizes[textSize],
            style.base,
            style.shapes[shape],
            style.sizes[size],
            style.backgroundColors[backgroundColors],
          )}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
