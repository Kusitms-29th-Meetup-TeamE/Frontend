import React, { PropsWithChildren, forwardRef, useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

const style: {
  base: string;
  color: Record<string, string>;
  selectedColor: Record<string, string>;
} = {
  base: 'relative max-w-[300px] w-full max-h-[100px] inline-flex justify-center items-center rounded-[50px] py-[25px] text-chip-semibold border-2 bg-white/[.54]',
  color: {
    활발한: 'gap-[14px] border border-chip-active text-chip-active',
    학문적인: 'gap-[10px] border border-chip-scholar text-chip-scholar',
    평화로운: 'gap-[10px] border border-chip-peaceful text-chip-peaceful',
    예술적인: 'gap-[14px] border border-chip-artistic text-chip-artistic',
    자연친화적인: 'gap-[12px] border border-chip-natural text-chip-natural',
    '배울 수 있는':
      'gap-[16px] border border-chip-learnable text-chip-learnable',
    창의적인: 'gap-[6px] border border-chip-creative text-chip-creative',
  },
  selectedColor: {
    활발한: 'bg-chip-active/[.20]',
    학문적인: 'bg-chip-scholar/[.24]',
    평화로운: 'bg-chip-peaceful/[.16]',
    예술적인: 'bg-chip-artistic/[.20]',
    자연친화적인: 'bg-chip-natural/[.16]',
    '배울 수 있는': 'bg-chip-learnable/[.16]',
    창의적인: 'bg-chip-creative/[.20]',
  },
};

export type FourthChipProps = {
  className?: string;
  icon?: string;
  text: string;
  type?: string;
  onClick: (text: string) => void;
};

const FourthChip = forwardRef<
  HTMLDivElement,
  PropsWithChildren<FourthChipProps>
>((props, ref) => {
  const { className, icon, text, type, onClick } = props;
  const [isSelected, setIsSelected] = useState<Boolean>(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
    onClick(text);
  };

  return (
    <button
      className={clsx(
        style.base,
        className,
        style.color[text as string],
        isSelected ? style.selectedColor[text as string] : '',
      )}
      onClick={handleSelected}
    >
      {icon && <Image src={icon} width={40} height={50} alt={''} />}
      <span>{text ?? type}</span>
      {isSelected ? (
        <Image
          src="/assets/onboarding/check.png"
          width={36}
          height={36}
          alt={''}
          className="absolute top-[-18px] right-[26px]"
        />
      ) : (
        ''
      )}
    </button>
  );
});

export default FourthChip;
