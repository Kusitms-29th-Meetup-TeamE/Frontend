import React from 'react';

import Button from '@/components/common-components/button/Button';

import SignUpTitle from '../signUp/SignUpTitle';

import clsx from 'clsx';
import Image from 'next/image';

export type OnboardingFrameProps = {
  stepImg: string;
  title: string;
  subTitle: string;
  isLast?: boolean;
  children?: React.ReactNode;
  btnMt: number;
};

const OnboardingFrame = (props: OnboardingFrameProps) => {
  const { stepImg, title, subTitle, isLast, children, btnMt } = props;

  return (
    <div className="w-full h-screen flex flex-col items-center pt-20 pb-20">
      <Image src={stepImg} width={300} height={12} alt={''} className="mb-10" />
      <SignUpTitle title={title} subTitle={subTitle} />
      <div className="h-[100%] display justify-center relative">{children}</div>
      <div
        className={clsx(
          'w-full h-fit flex justify-center gap-[24px]',
          `mt-[${btnMt}px]`,
        )}
      >
        <Button size="lg" color="gray">
          이전
        </Button>
        <Button size="lg">{isLast ? '시작하기' : '다음'}</Button>
      </div>
      <div className="text-body3 text-gray-06 underline underline-offset-6 cursor-pointer mt-7">
        모든 과정 건너뛰기
      </div>
    </div>
  );
};

export default OnboardingFrame;
