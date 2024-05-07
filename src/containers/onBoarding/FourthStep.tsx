import React from 'react';

import FourthChipCloud from '@/components/onBoarding/FourthChipCloud';
import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const FourthStep = () => {
  return (
    <>
      <OnboardingFrame
        stepImg={'/assets/onboarding/fourth_step.png'}
        title={'어떤 성격의 활동을 선호하시나요?'}
        subTitle={
          '선호하시는 활동 성격을 선택해주세요. 또바가 꼭 맞는 활동을 추천해드릴게요.'
        }
        btnMt={0}
      ></OnboardingFrame>
      <div className="absolute w-screen top-0">
        <FourthChipCloud />
      </div>
    </>
  );
};

export default FourthStep;
