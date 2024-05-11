import React from 'react';

import PointItem from '@/components/main/PointItem';

import Notice from '@/containers/main/Notice';
import Point from '@/containers/main/Point';
import SubBannerSlider from '@/containers/main/SubBannerSlider';

const TestPage = () => {
  return (
    <div className="pr-[10px] pl-[10px]">
      <div className="flex gap-2 p-2"></div>
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
