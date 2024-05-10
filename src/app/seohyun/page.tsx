import React from 'react';

import Notice from '@/containers/main/Notice';
import Point from '@/containers/main/Point';
import SubBannerSlider from '@/containers/main/SubBannerSlider';
import FirstStep from '@/containers/onBoarding/FirstStep';
import FourthStep from '@/containers/onBoarding/FourthStep';
import SecondStep from '@/containers/onBoarding/SecondStep';
import ThirdStep from '@/containers/onBoarding/ThirdStep';

const TestPage = () => {
  return (
    <div className="w-full pr-[10px] pl-[10px]">
      <div className="flex gap-2 p-2"></div>
      {/* <FirstStep /> */}
      {/* <SecondStep /> */}
      {/* <ThirdStep /> */}
      <FourthStep />
      <Notice />
      <div className="h-[30px]"></div>
      <SubBannerSlider
        imgs={[
          '/assets/main/subBanner1.svg',
          '/assets/main/subBanner1.svg',
          '/assets/main/subBanner1.svg',
        ]}
      />
      <div className="h-[30px]"></div>
      <Point />
    </div>
  );
};

export default TestPage;
