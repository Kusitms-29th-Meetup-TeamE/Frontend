import React from 'react';

import PointItem from '@/components/main/PointItem';

import Notice from '@/containers/main/Notice';
import Point from '@/containers/main/Point';
import SubBannerSlider from '@/containers/main/SubBannerSlider';
import ActivityHeader from '@/components/join/ActivityHeader';

const TestPage = () => {
  return (
    <div className="p-5">
      <ActivityHeader title={"활동 참여하기"} content={"취향에 맞는 활동을 찾고 참여하세요!"}/>
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
