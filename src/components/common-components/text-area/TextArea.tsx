import React, { PropsWithChildren, forwardRef, useState } from 'react';

import { TextAreaProps } from './TextArea.types';

import { clsx } from 'clsx';

const style: {
  base: string;
  size: Record<string, string>;
} = {
  base: 'w-full px-6 py-5 bg-gray-02 rounded-[20px] whitespace-pre-wrap overflow-hidden focus-visible:outline-primary-orange6 ',
  size: {
    sm: '',
    md: 'h-[78px] placeholder:text-h5 placeholder:text-gray-06 text-gray-10 text-body3', // 활동 참여 시 사용
    lg: 'h-[250px] border-[1px] border-gray-04 placeholder:text-notification-b1 placeholder:text-gray-06 text-notification-b1 text-gray-08', // 후기 등록 시 사용
  },
};
const TextArea = forwardRef<
  HTMLTextAreaElement,
  PropsWithChildren<TextAreaProps>
>((props, ref) => {
  const { className, size, placeHolder, onChange } = props;

  const [value, setValue] = useState('');

  return (
    <div className="w-full">
      <textarea
        ref={ref}
        className={clsx(style.base, style.size[size], className)}
        placeholder={placeHolder}
        onChange={(e) => {
          onChange?.(e);
          setValue(e.target.value);
        }}
        value={value}
      />
    </div>
  );
});

export default TextArea;
