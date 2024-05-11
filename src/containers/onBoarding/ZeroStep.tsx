import React from 'react';

import Button from '@/components/common-components/button/Button';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import useStepStore from '@/store/onboardingStepStore';

import Image from 'next/image';

const ZeroStep = () => {
  const setNextStep = useStepStore((state) => state.setNextStep);

  return (
    <div className="relative flex flex-col h-screen items-center overflow-y-hidden">
      <div className="mt-[74px] flex gap-4 items-end">
        <Image
          src="/assets/onboarding/zero_step_left.png"
          alt=""
          width={99}
          height={102}
        />
        <div className="text-h2 text-black">
          또바에 오신 것을 환영합니다!
          <Image
            src="/assets/onboarding/zero_step_underline.png"
            alt=""
            width={342}
            height={12}
          />
        </div>
        <Image
          src="/assets/onboarding/zero_step_right.png"
          alt=""
          width={99}
          height={102}
        />
      </div>
      <div className="w-screen h-full absolute top-[129px]">
        <Image src="/assets/onboarding/zero_step_background.svg" alt="" fill />
      </div>
      <Button
        size="lg"
        className="absolute top-[85%]"
        onClick={() => setNextStep()}
      >
        또바와 함께하기
      </Button>
    </div>
  );
};

export default ZeroStep;
