'use client';

import React, { useState } from 'react';

import CheckBox from '@/components/common-components/check-box/CheckBox';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import { log } from 'console';
import Image from 'next/image';

const variants = {
  login: 'flex justify-center items-end gap-[38px] pt-[124px] pb-[54px]',
  checkbox: 'flex flex-row gap-[10px] pl-[28px] cursor-pointer',
  checkboxLabel: 'text-body3 text-gray-07',
};

const page = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        className="absolute top-[40px] left-[50px]"
        src="/assets/ddoba_logo_text.svg"
        alt=""
        width={86}
        height={30}
      />
      <div className={variants.login}>
        <img className="h-min" src="/assets/main/point-left.svg" alt={''} />
        <SignUpTitle
          title={'로그인'}
          subTitle={'활기찬 우리들의 만남\n또바에서 또 봐요!'}
        />
        <img className="h-min" src="/assets/main/point-right.svg" alt={''} />
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="w-[588px] bg-gray-04">이메일 인풋</div>
        <div className="w-[588px] bg-gray-04 mb-[20px]">비밀번호 인풋</div>
        <div className={variants.checkbox} onClick={handleCheck}>
          <CheckBox
            width={19}
            height={19}
            isLogin={true}
            isChecked={isCheck}
            handleCheck={handleCheck}
          />
          <div className={variants.checkboxLabel}>로그인 상태 유지</div>
        </div>
      </div>
    </div>
  );
};

export default page;
