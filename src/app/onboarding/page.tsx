import React from 'react';

import FirstStep from '@/containers/onBoarding/FirstStep';
import FourthStep from '@/containers/onBoarding/FourthStep';
import SecondStep from '@/containers/onBoarding/SecondStep';
import ThirdStep from '@/containers/onBoarding/ThirdStep';
import ZeroStep from '@/containers/onBoarding/ZeroStep';

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <Image
        className="absolute top-10 left-[50px]"
        src="/assets/ddoba_logo_text.svg"
        alt=""
        width={86}
        height={30}
      />
      <ZeroStep />
      {/* <FirstStep /> */}
      {/* <SecondStep /> */}
      {/* <ThirdStep /> */}
      {/* <FourthStep /> */}
    </div>
  );
};

export default page;
