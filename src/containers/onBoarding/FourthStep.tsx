import React from 'react';

import FourthChipCloud from '@/components/onBoarding/FourthChipCloud';
import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const FourthStep = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <OnboardingFrame
        stepImg={'/assets/onboarding/fourth_step.png'}
        title={'배움 나누기'}
        subTitle={
          '내가 배움 선배가 되어 가르치거나, 내가 배움 후배가 되어 배우거나!'
        }
        centerImg={<FourthChipCloud />}
      />
    </div>
  );
};

export default FourthStep;
