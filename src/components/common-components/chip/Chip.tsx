import { PropsWithChildren, forwardRef } from 'react';

import { ChipProps } from '.';

import clsx from 'clsx';

const style: {
  base: string;
  color: Record<string, string>;
  type: string;
} = {
  base: 'max-h-[32px] inline-flex justify-center items-center rounded-[20px] px-[20px] py-[6px] text-chip-bold',
  color: {
    활발한: 'bg-[rgba(253,143,42,0.1)] border border-[#FD8F2A] text-[#FD8F2A]', // 활발한
    학문적인:
      'border border-[#E78751] bg-[rgba(231, 135, 81, 0.10)] text-[#E78751]', // 학문적인

    평화로운:
      'border border-[#8598FC] bg-[rgba(133, 152, 252, 0.10)] text-[#8598FC]',
    예술적인:
      'border border-[#A954DD] bg-[rgba(169, 84, 221, 0.10)] text-[#A954DD]',
    자연친화적인:
      'border border-[#4BAB5A] bg-[rgba(75, 171, 90, 0.10)] text-[#4BAB5A]',
    '배울 수 있는':
      'border border-[#EA709C] bg-[rgba(234, 112, 156, 0.10)] text-[#EA709C]',
    창의적인:
      'border border-[#FFC700] bg-[rgba(255, 199, 0, 0.10)] text-[#FFC700]',
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
