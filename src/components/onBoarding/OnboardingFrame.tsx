import React from 'react';

import Button from '@/components/common-components/button/Button';

import useStepStore from '@/store/onboardingStepStore';

import { useGlobalModal } from '../common-components/global-modal';
import SignUpTitle from '../signUp/SignUpTitle';

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

  // step 별 화면 전환
  const currentStep = useStepStore((state) => state.currentStep);
  const setPrevStep = useStepStore((state) => state.setPrevStep);
  const setNextStep = useStepStore((state) => state.setNextStep);

  // 임시 추가
  const currentChips = useStepStore((state) => state.currentChips);

  const handleNextStep = () => {
    if (currentStep === 5) {
      console.log('마지막 스텝');
    } else if (currentStep === 4) {
      console.log(currentChips);
      setNextStep();
    } else {
      setNextStep();
    }
  };

  const { setOnboardingModal } = useGlobalModal();

  const handleOnboardingModal = () => {
    setOnboardingModal({
      open: true,
      title: '모든 과정을 건너뛸까요?',
      content:
        '또바 서비스에 대한 설명을 모두 읽으면\n또바 포인트 100원을 받을 수 있어요!',
      onConfirm: () => router.push('/'),
    });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-20 pb-20">
      <Image src={stepImg} width={300} height={12} alt={''} className="mb-10" />
      <SignUpTitle title={title} subTitle={subTitle} />
      <div className="flex justify-center relative">{children}</div>
      <div className="absolute bottom-[110px] w-full h-fit flex flex-col justify-center items-center gap-7">
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
          onClick={handleOnboardingModal}
        >
          모든 과정 건너뛰기
        </div>
      </div>
    </div>
  );
};

export default OnboardingFrame;
