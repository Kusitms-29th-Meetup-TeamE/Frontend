import { useState } from 'react';

import Input from '@/components/common-components/input';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import { inputStyle } from './ThirdForm';

import clsx from 'clsx';
import Image from 'next/image';

export default function FifthForm() {
  const [email, setEmail] = useState<string>('');
  const [confirmNum, setConfirmNum] = useState<Number | null>(null);

  return (
    <div className="m-auto border border-black w-full max-w-[800px] flex flex-col justify-center items-center">
      <Image
        src={'/assets/signup/form5.png'}
        width={618}
        height={42}
        alt=""
        className="mb-[96px]"
      />

      <SignUpTitle title={'회원가입'} subTitle={'세부 정보를 입력해주세요.'} />

      <div className="mt-[40px] flex flex-col justify-center gap-5 w-full max-w-[588px]">
        <div className="flex gap-[6px]">
          <span className="pl-5 text-gray-11 text-h3">생년월일</span>
          <div>{/* TODO: 생년월일 넣기 */}</div>
        </div>

        <div className="flex gap-[6px]">
          <span className="pl-5 text-gray-11 text-h3">성별</span>

          <div>남자</div>
          <div>여자</div>
        </div>

        <div className="">
          <span className="pl-5 text-gray-11 text-h3">거주지</span>

          <div className="relative">
            <Input
              onChange={() => {
                // console.log(emailInputRef.current?.value);
              }}
              size="lg"
              defaultValue={confirmNum as number}
              placeholder="오른쪽 버튼을 눌러 주소를 검색해보세요."
              shape="square"
            />
            <span className={clsx(inputStyle.inputBtn, inputStyle.activeBtn)}>
              주소 검색
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
