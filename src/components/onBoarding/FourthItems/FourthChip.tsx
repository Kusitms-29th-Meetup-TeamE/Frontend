import React, { PropsWithChildren, forwardRef } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

const style: {
  base: string;
  color: Record<string, string>;
  type: string;
} = {
  base: 'max-w-[300px] w-full max-h-[100px] inline-flex justify-center items-center rounded-[50px] py-[25px] text-chip-semibold border-2 bg-white/[.54]',
  color: {
    활발한: 'gap-[14px] border border-chip-active text-chip-active', // 활발한
    학문적인: 'gap-[10px] border border-chip-scholar text-chip-scholar', // 학문적인
    평화로운: 'gap-[10px] border border-chip-peaceful text-chip-peaceful',
    예술적인: 'gap-[14px] border border-chip-artistic text-chip-artistic',
    자연친화적인: 'gap-[12px] border border-chip-natural text-chip-natural',
    '배울 수 있는':
      'gap-[16px] border border-chip-learnable text-chip-learnable',
    창의적인: 'gap-[6px] border border-chip-creative text-chip-creative',
  },
  // 활동 타입은 아래 type 색상만 사용합니다.
  type: '!px-[16px] !rounded-[30px] text-white text-chip-bold bg-primary-orange4 bg-opacity-80',
};

export type FourthChipProps = {
  className?: string;
  icon?: string;
  text?: string;
  type?: string;
};

const FourthChip = forwardRef<
  HTMLDivElement,
  PropsWithChildren<FourthChipProps>
>((props, ref) => {
  const { className, icon, text, type } = props;

  return (
    <button
      className={clsx(
        style.base,
        className,
        text ? style.color[text as string] : style.type,
      )}
    >
      {icon && <Image src={icon} width={40} height={50} alt={''} />}
      <span>{text ?? type}</span>
    </button>
  );
});

export default FourthChip;
