'use client';

import React, { use } from 'react';

import FifthStep from '@/containers/onBoarding/FifthStep';
import FirstStep from '@/containers/onBoarding/FirstStep';
import FourthStep from '@/containers/onBoarding/FourthStep';
import SecondStep from '@/containers/onBoarding/SecondStep';
import ThirdStep from '@/containers/onBoarding/ThirdStep';
import ZeroStep from '@/containers/onBoarding/ZeroStep';
import useStepStore from '@/store/onboarding/onboardingStepStore';

import Image from 'next/image';

const page = () => {
  const step = useStepStore((state) => state.currentStep);

  return (
    <div>
      <Image
        className="absolute top-10 left-[50px]"
        src="/assets/ddoba_logo_text.png"
        alt=""
        width={86}
        height={30}
      />
      {step === 0 && <ZeroStep />}
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <ThirdStep />}
      {step === 4 && <FourthStep />}
      {step === 5 && <FifthStep />}
    </div>
  );
};

export default page;
