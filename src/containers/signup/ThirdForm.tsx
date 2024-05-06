import { useState } from 'react';
import { MdOutlineLock } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

import Input from '@/components/common-components/input';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import Image from 'next/image';

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

      <div className="border border-red-500">
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
      </div>
    </div>
  );
}
