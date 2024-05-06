import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineLock } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

import Input from '@/components/common-components/input';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import Image from 'next/image';

export default function FourthForm() {
  const [email, setEmail] = useState<string>('');
  const [confirmNum, setConfirmNum] = useState<Number | null>(null);

  return (
    <div className="m-auto border border-black w-full max-w-[800px] flex flex-col justify-center items-center">
      <Image
        src={'/assets/signup/form4.png'}
        width={618}
        height={42}
        alt=""
        className="mb-[96px]"
      />

      <SignUpTitle title={'회원가입'} subTitle={'가입 정보를 입력해주세요.'} />

      <div className="mt-[40px] flex flex-col justify-center gap-5 w-full max-w-[588px]">
        <div className="">
          <span className="pl-5 text-gray-11 text-h3">이름</span>
          <Input
            startIcon={<BsPerson />}
            onChange={() => {
              // console.log(emailInputRef.current?.value);
            }}
            size="lg"
            defaultValue={email}
            placeholder="이름을 입력해주세요."
            shape="square"
          />
        </div>

        <div className="flex flex-col">
          <span className="pl-5 text-gray-11 text-h3">비밀번호</span>
          <Input
            startIcon={<MdOutlineLock />}
            onChange={() => {
              // console.log(emailInputRef.current?.value);
            }}
            size="lg"
            defaultValue={confirmNum as number}
            placeholder="비밀번호를 입력해주세요."
            shape="square"
            type="password"
          />
          <span className="pl-7 mt-[10px] mb-[14px] text-h5 text-gray-08">
            8자 이상 32자 이하로 입력해주세요.
          </span>
        </div>

        <div className="">
          <span className="pl-5 text-gray-11 text-h3">비밀번호 확인</span>
          <Input
            startIcon={<MdOutlineLock />}
            onChange={() => {
              // console.log(emailInputRef.current?.value);
            }}
            size="lg"
            defaultValue={confirmNum as number}
            placeholder="위에 기재한 비밀번화와 동일하게 입력해주세요."
            shape="square"
            type="password"
          />
        </div>
      </div>
    </div>
  );
}
