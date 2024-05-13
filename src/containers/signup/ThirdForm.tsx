import { Dispatch, SetStateAction, useState } from 'react';
import { MdOutlineLock } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

import Input from '@/components/common-components/input';

import SignUpTitle from '@/components/signup/SignUpTitle';

import { useNotifyError, useNotifySuccess } from '@/hooks/useToast';

import { postEmailAuth } from '@/api/user';

import clsx from 'clsx';
import Image from 'next/image';

export const inputStyle = {
  inputBtn:
    'absolute right-7 top-4 px-[10px] py-[9px] rounded-[6px] items-center flex justify-center text-gray-06 text-h5 bg-gray-03 h-[36px] w-full max-w-[90px]',
  activeBtn: 'bg-primary-orange1 text-primary-orange6 cursor-pointer',
};

export type ThirdFormProps = {
  authEmail: boolean;
  setAuthEmail: Dispatch<SetStateAction<boolean>>;
};

export default function ThirdForm(props: ThirdFormProps) {
  const { authEmail, setAuthEmail } = props;
  const [email, setEmail] = useState<string>('');

  const disabledBtn = () => {
    const regExp =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (regExp.test(email)) {
      // TODO: 아래 setter 삭제 필요 (임시로 작성해놓음)
      // setAuthEmail(false);
      return false;
    } else return true;
  };

  const requestAuthNumber = () => {
    sendAuthNumber();
    useNotifySuccess('인증번호가 발송되었습니다.');
  };

  const [authAnswer, setAuthAnswer] = useState<string | void>('');
  const [authInput, setAuthInput] = useState<string>('');

  const sendAuthNumber = async () => {
    await postEmailAuth(email).then((res) => {
      console.log('res:', res);
      setAuthAnswer(`${res}`);
    });
  };

  const checkAuthNum = (input: any) => {
    if (input === authAnswer) {
      console.log('인증성공');
      useNotifySuccess('인증이 완료되었습니다.');
      setAuthEmail(true);
    } else {
      console.log('실패');
      useNotifyError('인증에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="m-auto w-full max-w-[800px] flex flex-col justify-center items-center">
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="lg"
            defaultValue={email}
            placeholder="이메일을 입력해주세요."
            shape="square"
          />
          <span
            className={clsx(
              inputStyle.inputBtn,
              !disabledBtn() && inputStyle.activeBtn,
            )}
            aria-disabled={disabledBtn()}
            onClick={requestAuthNumber}
          >
            인증 요청
          </span>
        </div>

        <div className="relative">
          <Input
            startIcon={<MdOutlineLock />}
            onChange={(e) => setAuthInput(e.currentTarget.value)}
            size="lg"
            placeholder="인증번호를 입력해주세요."
            shape="square"
            value={authInput}
          />
          <span
            onClick={() => checkAuthNum(authInput)}
            className={clsx(
              inputStyle.inputBtn,
              authInput.length !== 0 && inputStyle.activeBtn,
            )}
            aria-disabled={authInput.length === 0}
          >
            인증 확인
          </span>
        </div>
      </div>
    </div>
  );
}
