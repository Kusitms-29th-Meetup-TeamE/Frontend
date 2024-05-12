import React from 'react';

import OnboardingFrame from '@/components/onboarding/OnboardingFrame';
import FourthChipCloud from '@/components/onboarding/fourth-items/FourthChipCloud';

const FourthStep = () => {
  return (
    <>
      <OnboardingFrame
        stepImg={'/assets/onboarding/fourth_step.png'}
        title={'어떤 성격의 활동을 선호하시나요?'}
        subTitle={
          '선호하시는 활동 성격을 선택해주세요. 또바가 꼭 맞는 활동을 추천해드릴게요.'
        }
      >
        <FourthChipCloud />
      </OnboardingFrame>
    </>
  );
};

export default FourthStep;
