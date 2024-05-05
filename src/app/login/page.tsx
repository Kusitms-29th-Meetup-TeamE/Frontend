'use client';

import React, { useState } from 'react';

import Button from '@/components/common-components/button';
import CheckBox from '@/components/common-components/check-box/CheckBox';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import Image from 'next/image';

const variants = {
  login: 'flex justify-center items-end gap-[38px] pt-[124px] pb-[54px]',
  checkbox: 'flex flex-row gap-[10px] pl-[28px] cursor-pointer',
  checkboxLabel: 'text-body3 text-gray-07',
  seperator: 'relative flex justify-center w-[588px] mb-5',
  seperatorLabel:
    'absolute top-[-10px] pr-[14px] pl-[14px] bg-white text-gray-07 text-footer-regular',
  kakao:
    'w-[588px] h-[68px] mb-[20px] flex justify-center items-center gap-[10px] rounded-[20px] text-center bg-[#F6E24B] text-gray-09 text-body2',
  bottomLabel: 'w-[588px] flex justify-between pr-[28px] pl-[28px]',
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
      <div className="flex flex-col gap-[12px] mb-[20px]">
        <div className="w-[588px] bg-gray-04">이메일 인풋</div>
        <div className="w-[588px] bg-gray-04 mb-[10px]">비밀번호 인풋</div>
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
      <Button size="xl" shape="square" className="mb-10">
        로그인
      </Button>
      <div className={variants.seperator}>
        <div className="w-full h-[1px] bg-gray-05" />
        <div className={variants.seperatorLabel}>또는</div>
      </div>
      <button className={variants.kakao}>
        <img src="/assets/kakao.svg" alt="" />
        <span>카카오 로그인</span>
      </button>
      <div className={variants.bottomLabel}>
        <div className="flex items-center gap-[8px]">
          <div className="text-footer-medium text-gray-08">
            아직 회원이 아니신가요?
          </div>
          <div className="text-chip-bold text-primary-orange6 cursor-pointer">
            회원가입
          </div>
        </div>
        <div className="flex items-center gap-[12px] text-footer-medium text-gray-08">
          <span className="cursor-pointer">아이디 찾기</span>
          <div className="bg-gray-05 w-[1px] h-[16px]"></div>
          <span className="cursor-pointer">비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default page;
