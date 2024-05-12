import { PropsWithChildren, forwardRef } from 'react';

import { ChipProps } from '.';

import clsx from 'clsx';

const style: {
  base: string;
  size: Record<string, string>;
  focus: Record<string, string>;
  color: Record<string, string>;
  type: string;
} = {
  base: 'max-h-[32px] inline-flex justify-center items-center rounded-[20px] px-[20px] py-[6px] text-chip-bold',
  size: {
    sm: '', // 활동 정보 컴포넌트에서 사용하는 칩
    md: 'max-h-9 rounded-[22px] px-[22px] py-[6px] !text-chip-semibold-sm cursor-pointer', // 필터링에서 사용하는 칩
  },
  focus: {
    abled: 'text-white bg-primary-orange6',
    disabled: 'border-none text-gray-07 bg-gray-04',
  },
  color: {
    활발한: 'bg-[rgba(253,143,42,0.1)] border border-[#FD8F2A] text-[#FD8F2A]', // 활발한
    학문적인:
      'border border-[#E78751] bg-[rgba(231, 135, 81, 0.10)] text-[#E78751]', // 학문적인
    평화로운:
      'border border-[#8598FC] bg-[rgba(133, 152, 252, 0.10)] text-[#8598FC]',
    예술적인:
      'border border-[#A954DD] bg-[rgba(169, 84, 221, 0.10)] text-[#A954DD]',
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
    const {
      className,
      size = 'sm',
      text,
      type,
      isBtn = false,
      isSelected,
      isPersonality = true,
    } = props;

    return (
      <div
        className={clsx(
          style.base,
          className,
          isBtn
            ? isSelected
              ? !isPersonality && style.focus['abled']
              : style.focus['disabled']
            : '',
          text ? style.color[text as string] : style.type,
          style.size[size],
        )}
      >
        {text ?? type}
      </div>
    );
  },
);

Chip.displayName = 'Chip';

export default Chip;
