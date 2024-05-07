import React from 'react';

import Button from '@/components/common-components/button/Button';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const FirstStep = () => {
  return (
    <OnboardingFrame
      stepImg={'/assets/onboarding/first_step.png'}
      title={'활동 참여하기'}
      subTitle={
        '또바가 추천해주는 사회활동을 통해 새로운 인연, 다양한 취미를 만들어보세요!'
      }
      btnMt={-89}
    >
      <Image
        src="/assets/onboarding/first_center_img.png"
        width={988}
        height={736}
        alt={''}
      />
    </OnboardingFrame>
  );
};

export default FirstStep;
