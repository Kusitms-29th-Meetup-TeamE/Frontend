import { PropsWithChildren, forwardRef } from 'react';

import { ChipProps } from '.';

import clsx from 'clsx';

const style: {
  base: string;
  color: Record<string, string>;
  type: string;
} = {
  base: 'max-h-[32px] inline-flex justify-center items-center rounded-[20px] px-[20px] py-[6px] text-chip-bold bg-opacity-10 ',
  color: {
    활발한: 'bg-chip-active border border-chip-active text-chip-active', // 활발한
    학문적인: 'border border-chip-scholar bg-chip-scholar text-chip-scholar', // 학문적인
    평화로운: 'border border-chip-peaceful bg-chip-peaceful text-chip-peaceful',
    예술적인: 'border border-chip-artistic bg-chip-artistic text-chip-artistic',
    자연친화적인:
      'border border-chip-natural bg-chip-natural text-chip-natural',
    '배울 수 있는':
      'border border-chip-learnable bg-chip-learnable text-chip-learnable',
    창의적인: 'border border-chip-creative bg-chip-creative text-chip-creative',
  },
  // 활동 타입은 아래 type 색상만 사용합니다.
  type: '!px-[16px] !rounded-[30px] text-white text-chip-bold bg-primary-orange4 bg-opacity-80',
};

/**
 * Chip - 활동 성격과 타입에 사용되는 컴포넌트
 * @param text
 * @returns
 */
const Chip = forwardRef<HTMLDivElement, PropsWithChildren<ChipProps>>(
  (props, ref) => {
    const { className, text, type } = props;

    return (
      <div
        className={clsx(
          style.base,
          className,
          text ? style.color[text as string] : style.type,
        )}
      >
        {text ?? type}
      </div>
    );
  },
);

Chip.displayName = 'Chip';

export default Chip;
