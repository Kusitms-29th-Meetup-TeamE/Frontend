import React from 'react';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col">
      <Image
        className="absolute top-[40px] left-[50px]"
        src="/assets/ddoba_logo_text.svg"
        alt=""
        width={86}
        height={30}
      />
      <div className="flex justify-center items-end gap-[38px] pt-[124px] pb-[54px]">
        <img className="h-min" src="/assets/main/point-left.svg" alt={''} />
        <SignUpTitle
          title={'로그인'}
          subTitle={'활기찬 우리들의 만남\n또바에서 또 봐요!'}
        />
        <img className="h-min" src="/assets/main/point-right.svg" alt={''} />
      </div>
    </div>
  );
};

export default page;
