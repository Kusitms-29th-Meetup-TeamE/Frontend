import { useState } from 'react';
import { MdOutlineLock } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

import Input from '@/components/common-components/input';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import clsx from 'clsx';
import Image from 'next/image';

export const inputStyle = {
  inputBtn:
    'absolute right-7 top-4 px-[10px] py-[9px] rounded-[6px] items-center flex justify-center text-gray-06 text-h5 bg-gray-03 h-[36px] w-full max-w-[90px] cursor-pointer',
  activeBtn: 'bg-primary-orange1 text-primary-orange6',
};

export default function ThirdForm() {
  const [email, setEmail] = useState<string>('');
  const [confirmNum, setConfirmNum] = useState<Number | null>(null);

  return (
    <div className="m-auto border border-black w-full max-w-[800px] flex flex-col justify-center items-center">
      <Image
        src={'/assets/signup/form3.png'}
        width={618}
        height={42}
        alt=""
        className="mb-[96px]"
      />

      <SignUpTitle
        title={'회원가입'}
        subTitle={'이메일 인증을 완료해주세요.'}
      />

      <div className="mt-[74px] flex flex-col justify-center gap-5 w-full max-w-[588px]">
        <div className="relative">
          <Input
            startIcon={<TfiEmail />}
            onChange={() => {
              // console.log(emailInputRef.current?.value);
            }}
            size="lg"
            defaultValue={email}
            placeholder="이메일을 입력해주세요."
            shape="square"
          />
          <span className={inputStyle.inputBtn}>인증 요청</span>
        </div>

        <div className="relative">
          <Input
            startIcon={<MdOutlineLock />}
            onChange={() => {
              // console.log(emailInputRef.current?.value);
            }}
            size="lg"
            defaultValue={confirmNum as number}
            placeholder="인증번호를 입력해주세요."
            shape="square"
          />
          <span className={clsx(inputStyle.inputBtn)}>인증 확인</span>
        </div>
      </div>
    </div>
  );
}
