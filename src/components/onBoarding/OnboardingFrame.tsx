import React from 'react';

import Button from '@/components/common-components/button/Button';

import Image from 'next/image';

export type OnboardingFrameProps = {
  stepImg: string;
  title: string;
  subTitle: string;
  isLast?: boolean;
  centerImg?: React.ReactNode;
};

const OnboardingFrame = (props: OnboardingFrameProps) => {
  const { stepImg, title, subTitle, isLast, centerImg } = props;

  return (
    <div className="w-full flex flex-col justify-center items-center mt-[18px]">
      <Image src={stepImg} width={300} height={12} alt={''} />
      {/* 로그인 머지된 후 컴포넌트 사용 예정 */}
      {centerImg}
      <div className="w-full flex justify-center gap-[24px] mb-[28px]">
        <Button size="lg" color="gray">
          이전
        </Button>
        <Button size="lg">{isLast ? '시작하기' : '다음'}</Button>
      </div>
      <div className="text-body3 text-gray-06 underline underline-offset-6 cursor-pointer">
        모든 과정 건너뛰기
      </div>
    </div>
  );
};

export default OnboardingFrame;
