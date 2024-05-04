import React from 'react';

import Button from '@/components/common-components/button/Button';

import Image from 'next/image';

const FirstStep = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[18px]">
      <Image
        src="/assets/onboarding/first_step.png"
        width={300}
        height={12}
        alt={''}
      />
      {/* 로그인 머지된 후 컴포넌트 사용 예정 */}
      <Image
        src="/assets/onboarding/first_chips_cloud.png"
        width={1200}
        height={736}
        className="mt-[124px]" // step에서부터 124px
        alt={''}
      />
      <div className="w-full flex justify-center gap-[24px] mb-[28px]">
        <Button size="lg" color="gray">
          이전
        </Button>
        <Button size="lg">다음</Button>
      </div>
      <div className="text-body3 text-gray-06 underline underline-offset-6 cursor-pointer">
        모든 과정 건너뛰기
      </div>
    </div>
  );
};

export default FirstStep;
