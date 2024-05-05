import React from 'react';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const FourthStep = () => {
  return (
    <OnboardingFrame
      stepImg={'/assets/onboarding/fourth_step.png'}
      title={'배움 나누기'}
      subTitle={
        '내가 배움 선배가 되어 가르치거나, 내가 배움 후배가 되어 배우거나!'
      }
      centerImg={
        <Image
          src="/assets/onboarding/fourth_center_img.png"
          width={1076}
          height={745}
          className="mt-[124px]" // step에서부터 124px
          alt={''}
        />
      }
    />
  );
};

export default FourthStep;
