import React from 'react';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const SecondStep = () => {
  return (
    <OnboardingFrame
      stepImg={'/assets/onboarding/second_step.png'}
      title={'배움 나누기'}
      subTitle={
        '내가 배움 선배가 되어 가르치거나, 내가 배움 후배가 되어 배우거나!'
      }
      btnMt={-130}
    >
      <Image
        src="/assets/onboarding/second_center_img.png"
        width={1300}
        height={650}
        alt={''}
        className="mt-[-100px]"
      />
    </OnboardingFrame>
  );
};

export default SecondStep;