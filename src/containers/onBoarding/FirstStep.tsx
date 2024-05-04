import React from 'react';

import Button from '@/components/common-components/button/Button';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const FirstStep = () => {
  return (
    <OnboardingFrame
      stepImg={
        <Image
          src="/assets/onboarding/first_step.png"
          width={300}
          height={12}
          alt={''}
        />
      }
      title={''}
      subTitle={''}
      centerImg={
        <Image
          src="/assets/onboarding/first_chips_cloud.png"
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
