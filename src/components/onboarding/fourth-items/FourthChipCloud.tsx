import React from 'react';

import FourthChip from '@/components/onboarding/fourth-items/FourthChip';

import useStepStore from '@/store/onboardingStepStore';

import Image from 'next/image';

const FirstLine = ['활발한', '학문적인'];

const SecondLine = ['창의적인', '자연친화적인', '평화로운'];

const ThirdLine = ['배울 수 있는', '예술적인'];

const FourthChipCloud = () => {
  const currentChips = useStepStore((state) => state.currentChips);
  const setCurrentChips = useStepStore((state) => state.setCurrentChips);

  // 선택한 성격 칩 전역 상태로 저장
  const handleChipClick = (text: string) => {
    if (currentChips.includes(text)) {
      setCurrentChips(currentChips.filter((chip) => chip !== text));
    } else {
      setCurrentChips([...currentChips, text]);
    }
  };

  return (
    <div className="relative w-screen flex justify-center items-center mt-[82px]">
      <Image
        src="/assets/onboarding/fourth_center_img.png"
        width={1076}
        height={745}
        className="absolute -z-10" // step에서부터 91px
        alt={''}
      />
      <div className="flex flex-col max-w-[920px] w-full gap-[49px]">
        <div className="flex justify-center gap-[10px]">
          {FirstLine.map((data) => (
            <FourthChip text={data} onClick={handleChipClick} key={data} />
          ))}
        </div>
        <div className="flex justify-center gap-[10px]">
          {SecondLine.map((data) => (
            <FourthChip text={data} onClick={handleChipClick} key={data} />
          ))}
        </div>
        <div className="flex justify-center gap-[10px]">
          {ThirdLine.map((data) => (
            <FourthChip text={data} onClick={handleChipClick} key={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthChipCloud;
