'use client';

import React, { useState } from 'react';

import Button from '@/components/common-components/button/Button';

import { useOnboardingInfo } from '@/hooks/api/useUser';

import useStepStore from '@/store/onboarding/onboardingStepStore';

import SignUpTitle from '../signup/SignUpTitle';
import OnboardingModal from './OnboardingModal';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export type OnboardingFrameProps = {
  stepImg: string;
  title: string;
  subTitle: string;
  children?: React.ReactNode;
};

const OnboardingFrame = (props: OnboardingFrameProps) => {
  const { stepImg, title, subTitle, children } = props;
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // step 별 화면 전환
  const currentStep = useStepStore((state) => state.currentStep);
  const setPrevStep = useStepStore((state) => state.setPrevStep);
  const setNextStep = useStepStore((state) => state.setNextStep);

  const currentChips = useStepStore((state) => state.currentChips);
  const { mutate } = useOnboardingInfo(currentChips);

  const handleNextStep = () => {
    if (currentStep === 5) {
      mutate();
      router.push('/');
    } else {
      setNextStep();
    }
  };

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-20 pb-20">
      <Image src={stepImg} width={300} height={12} alt={''} className="mb-10" />
      <SignUpTitle title={title} subTitle={subTitle} />
      <div className="flex justify-center">{children}</div>
      <div className="mt-[56px] w-full h-fit flex flex-col justify-center items-center gap-7">
        <div className="w-full flex justify-center gap-6">
          <Button size="lg" color="gray" onClick={() => setPrevStep()}>
            이전
          </Button>
          <Button size="lg" onClick={handleNextStep}>
            {currentStep === 5 ? '시작하기' : '다음'}
          </Button>
        </div>
        <div
          className="text-body3 text-gray-06 underline underline-offset-6 cursor-pointer"
          onClick={handleModal}
        >
          모든 과정 건너뛰기
        </div>
      </div>
      <OnboardingModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title={'모든 과정을 건너뛸까요?'}
        content={
          '또바 서비스에 대한 설명을 모두 읽으면\n또바 포인트 100원을 받을 수 있어요!'
        }
      />
    </div>
  );
};

export default OnboardingFrame;
