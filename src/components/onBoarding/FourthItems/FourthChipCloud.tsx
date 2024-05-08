import React from 'react';

import FourthChip from '@/components/onBoarding/FourthChip';

import Image from 'next/image';

const FirstLine = ['활발한', '학문적인'];

const SecondLine = ['창의적인', '자연친화적인', '평화로운'];

const ThirdLine = ['배울 수 있는', '예술적인'];

const FourthChipCloud = () => {
  return (
    <div className="relative w-full flex justify-center items-center mt-72">
      <Image
        src="/assets/onboarding/fourth_center_img.png"
        width={1076}
        height={745}
        className="absolute -z-10" // step에서부터 91px
        alt={''}
      />
      <div className="flex flex-col max-w-[920px] w-full gap-[49px]">
        <div className="flex justify-center gap-[10px]">
          {FirstLine.map((data, index) => (
            <FourthChip text={data} />
          ))}
        </div>
        <div className="flex justify-center gap-[10px]">
          {SecondLine.map((data, index) => (
            <FourthChip text={data} />
          ))}
        </div>
        <div className="flex justify-center gap-[10px]">
          {ThirdLine.map((data, index) => (
            <FourthChip text={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthChipCloud;
