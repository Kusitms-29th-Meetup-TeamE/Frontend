import React from 'react';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const FifthStep = () => {
  return (
    <>
      <OnboardingFrame
        stepImg={'/assets/onboarding/fifth_step.png'}
        title={'그럼 이제 시작해볼까요?'}
        subTitle={
          '만남을 이어가면 또바 포인트도 쌓을 수 있어요. 여러분의 만남을 또바가 응원해요!'
        }
      >
        <Image
          src="/assets/onboarding/fifth_center_img.png"
          width={688}
          height={739}
          className="mt-[-100px] z-[-1]"
          alt={''}
        />
      </OnboardingFrame>
    </>
  );
};

export default FifthStep;
