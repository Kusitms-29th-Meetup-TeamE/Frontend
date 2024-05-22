'use client';

import Spinner from '@/components/common-components/spinner';

import Notice from '@/containers/main/Notice';
import Point from '@/containers/main/Point';
import SubBannerSlider from '@/containers/main/SubBannerSlider';
import FirstStep from '@/containers/onboarding/FirstStep';
import FourthStep from '@/containers/onboarding/FourthStep';
import SecondStep from '@/containers/onboarding/SecondStep';
import ThirdStep from '@/containers/onboarding/ThirdStep';

const TestPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full pr-[10px] pl-[10px]">
        {/* <div className="flex gap-2 p-2"></div>
 
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
    <Point /> */}
        <Spinner isLoading={true} size={70} messageStyle="text-body2" />
      </div>
    </div>
  );
};

export default TestPage;
