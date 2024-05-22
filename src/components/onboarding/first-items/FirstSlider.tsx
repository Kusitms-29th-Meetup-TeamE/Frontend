import React from 'react';

import { onboardingData } from '@/constants/object';

import FirstChip from './FirstChip';

import Image from 'next/image';

const FirstSlider = () => {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center">
      <Image
        src="/assets/onboarding/first_center_img.png"
        width={889}
        height={662}
        alt={''}
      />
      <div className="relative mt-[-151px] max-w-[1200px] w-full h-fit mx-auto flex gap-6">
        <div className="absolute top-0 h-24 bg-gradient-to-r from-white to-transparent max-w-[478px] w-full left-[0%] mx-auto" />
        {onboardingData &&
          onboardingData.map((item, idx) => (
            <FirstChip
              key={idx}
              chipLabel={Object.keys(item)[0]}
              content={Object.values(item)[0]}
            />
          ))}
        <div className="absolute top-0 h-24 bg-gradient-to-r from-transparent to-white max-w-[478px] w-full right-[0%] mx-auto" />
      </div>
    </div>
  );
};

export default FirstSlider;
