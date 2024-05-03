import { PropsWithChildren, forwardRef } from 'react';

import { ChipColor, ChipProps } from '.';

import clsx from 'clsx';

const style: {
  base: string;
  color: Record<ChipColor, string>;
} = {
  base: 'max-h-[32px] inline-flex justify-center items-center rounded-[20px] px-[20px] py-[6px] text-chip-bold',
  color: {
    orange:
      'bg-primary-orange1 border border-primary-orange5 text-primary-orange5',
    blue: 'border',
    purple: 'border',
    green: 'border',
    pink: 'border',
    yellow: 'border',
    // 활동 타입은 아래 type 색상만 사용합니다.
    type: '!px-[16px] !rounded-[30px] text-white text-chip-bold bg-primary-orange4 bg-opacity-80',
  },
};

/**
 * Chip - 활동 성격과 타입에 사용되는 텀포넌트
 * @param color
 * @param text
 * @returns
 */
const Chip = forwardRef<HTMLDivElement, PropsWithChildren<ChipProps>>(
  (props, ref) => {
    const { color, className, text } = props;

    return (
      <div className={clsx(style.base, className, style.color[color])}>
        {text}
      </div>
    );
  },
);

Chip.displayName = 'Chip';

export default Chip;
