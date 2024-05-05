import React from 'react';

import Button from '@/components/common-components/button/Button';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const FirstStep = () => {
  return (
    <OnboardingFrame
      stepImg={'/assets/onboarding/first_step.png'}
      title={''}
      subTitle={''}
      centerImg={
        <Image
          src="/assets/onboarding/first_center_img.png"
          width={1200}
          height={736}
          className="mt-[124px]" // step에서부터 124px
          alt={''}
        />
      }
    />
  );
};

export default FirstStep;
