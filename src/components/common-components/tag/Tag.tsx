import { PropsWithChildren, forwardRef } from 'react';

import { TagColor, TagProps } from './Tag.types';

import clsx from 'clsx';

// TODO: 디자인 더 나오면 스타일 추가 필요
const style: {
  base: string;
  color: Record<TagColor, string>;
} = {
  base: 'max-h-[31px] inline-flex justify-center items-center rounded-[20px] px-[20px] py-[8px] text-chip-bold',
  color: {
    orange:
      'bg-primary-orange1 border border-primary-orange5 text-primary-orange5',
    white: '',
  },
};

const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(
  (props, ref) => {
    const { color, className, text } = props;

    return (
      <div className={clsx(style.base, className, style.color[color])}>
        {text}
      </div>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
