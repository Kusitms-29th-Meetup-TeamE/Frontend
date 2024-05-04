import React from 'react';

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
    </div>
  );
};

export default FirstStep;
