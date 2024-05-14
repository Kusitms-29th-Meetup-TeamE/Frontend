import { forwardRef, PropsWithChildren, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import { InputProps, InputSize, InputShape } from '.';

import clsx from 'clsx';

const style: {
  base: string;
  sizes: Record<InputSize, string>;
  shapes: Record<InputShape, string>;
} = {
  base: 'border border-gray-05 placeholder:text-gray-06 focus:outline-primary-orange5',
  sizes: {
    sm: '',
    md: '',
    lg: 'py-5 px-7 w-full max-w-[588px] h-full max-h-[68px] text-h4', // 회원가입, 로그인에서 사용
  },
  shapes: {
    square: 'rounded-[20px]', // 회원가입, 로그인에서 사용
    rounded: 'rounded-[30px]',
  },
};

const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (props, ref) => {
    const {
      onChange,
      placeholder,
      onKeyDown,
      defaultValue = '',
      size = 'lg',
      shape = 'square',
      className,
      search,
      startIcon,
      ...rest
    } = props;

    const [value, setValue] = useState(defaultValue);

    return (
      <div className="relative w-full">
        {search && (
          <IoIosSearch
            className={clsx(
              'text-[20px] absolute top-[25px] left-[18px]',
              value ? 'text-gray-10' : 'text-gray-06',
            )}
          />
        )}
        <div
          className={clsx(
            'text-[20px] absolute top-[25px] left-[18px]',
            value ? 'text-gray-10' : 'text-gray-06',
          )}
        >
          {startIcon}
        </div>

        <input
          value={value}
          onChange={(e) => {
            onChange?.(e);
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            search && 'pl-12',
            startIcon !== undefined && 'pl-12',
            className,
            style.base,
            style.shapes[shape],
            style.sizes[size as InputSize],
          )}
          {...rest}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
