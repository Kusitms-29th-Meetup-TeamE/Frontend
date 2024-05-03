import React from 'react';

import Notice from '@/containers/main/Notice';
import SubBannerSlider from '@/containers/main/SubBannerSlider';

const TestPage = () => {
  return (
    <>
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
    </>
  );
};

export default TestPage;
