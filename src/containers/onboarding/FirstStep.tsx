import React from 'react';

import FirstSlider from '@/components/onboarding/first-items/FirstSlider';
import OnboardingFrame from '@/components/onboarding/OnboardingFrame';

const FirstStep = () => {
  return (
    <>
      <OnboardingFrame
        stepImg={'/assets/onboarding/first_step.png'}
        title={'활동 참여하기'}
        subTitle={
          '또바가 추천해주는 사회활동을 통해 새로운 인연, 다양한 취미를 만들어보세요!'
        }
      >
        <FirstSlider />
      </OnboardingFrame>
    </>
  );
};

export default FirstStep;
