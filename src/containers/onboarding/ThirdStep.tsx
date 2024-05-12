import React from 'react';

import OnboardingFrame from '@/components/onboarding/OnboardingFrame';

import Image from 'next/image';

const ThirdStep = () => {
  return (
    <OnboardingFrame
      stepImg={'/assets/onboarding/third_step.png'}
      title={'함께 대화하기'}
      subTitle={
        '스치듯 지나가는 새로운 인연들, 만남을 계속 이어가볼까요? 함께 대화하기로 또 만나봐요!'
      }
    >
      사진자리
    </OnboardingFrame>
  );
};

export default ThirdStep;
