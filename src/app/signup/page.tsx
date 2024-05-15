'use client';

import { useState } from 'react';

import Button from '@/components/common-components/button';

import { useLocalUserInfo } from '@/hooks/useUser';
import { UserInfoProps } from '@/types/user';

import FifthForm from '@/containers/signup/FifthForm';
import FirstForm from '@/containers/signup/FirstForm';
import FourthForm from '@/containers/signup/FourthForm';
import SecondForm, { checkData } from '@/containers/signup/SecondForm';
import ThirdForm from '@/containers/signup/ThirdForm';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';

const btnStyle = {
  form1: 'mt-[104px]',
  form2: 'mt-[233px]',
  form3: 'mt-[350px]',
  form4: 'mt-[130px]',
  form5: 'mt-[166px]',
};

export default function SignUp() {
  const router = useRouter();

  const [step, setStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [checkItems, setCheckItems] = useState(() => {
    return checkData.map(() => false);
  });

  const [authEmail, setAuthEmail] = useState<boolean>(false);

  // 네 번째 폼 - disabled state
  const [checkForm, setCheckForm] = useState<boolean>(true);

  const handlePrevClick = () => {
    if (step > 0) {
      setStep(step - 1);
      if (step === 2) setAuthEmail(false);
    }
  };

  const allRequiredChecked = checkItems.slice(0, 3).every(Boolean); // 필수항목 체크 여부 확인

  const disabledBtn = () => {
    if (
      step === 0 &&
      selectedOption !== 'general' &&
      selectedOption !== 'organization'
    )
      return true;
    if (step === 1 && !allRequiredChecked) return true;
    if (step === 2 && !authEmail) return true;
    if (step === 3 && checkForm) return true;

    return false;
  };

  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    // third-form
    email: '',
    // fourth-form
    name: '',
    password: '',
    confirmPassword: '',
    // fifth-form
    gender: '',
    birthYear: '',
    location: '',
  });

  console.log('userinfo', userInfo);

  const { mutate, isPending } = useLocalUserInfo(userInfo);

  const handleNextClick = () => {
    if (step < 4) {
      setStep(step + 1);
      if (step === 2) {
        setUserInfo((prev) => ({
          ...prev,
          email: email,
        }));
      }
    }

    if (step === 4) {
      mutate();
    }
  };

  const [email, setEmail] = useState<string>('');

  return (
    <main className="pt-[70px]">
      {step === 0 && (
        <FirstForm
          selectedOption={selectedOption as string}
          setSelectedOption={setSelectedOption}
        />
      )}
      {step === 1 && (
        <SecondForm checkItems={checkItems} setCheckItems={setCheckItems} />
      )}
      {step === 2 && (
        <ThirdForm
          setAuthEmail={setAuthEmail}
          email={email}
          setEmail={setEmail}
        />
      )}
      {step === 3 && (
        <FourthForm setCheckForm={setCheckForm} setUserInfo={setUserInfo} />
      )}
      {step === 4 && <FifthForm setUserInfo={setUserInfo} />}

      <div
        className={clsx(
          'flex gap-6 w-full justify-center',
          step === 0 && btnStyle.form1,
          step === 1 && btnStyle.form2,
          step === 2 && btnStyle.form3,
          step === 3 && btnStyle.form4,
          step === 4 && btnStyle.form5,
        )}
      >
        {step !== 0 && (
          <Button
            color="gray"
            shape="rounded"
            size="lg"
            onClick={handlePrevClick}
          >
            이전
          </Button>
        )}

        <Button
          color={disabledBtn() ? 'disabled' : 'default'}
          shape="rounded"
          size="lg"
          onClick={handleNextClick}
          // disabled={disabledBtn()}
          type="submit"
        >
          {step !== 4 ? '다음' : '완료'}
        </Button>
      </div>
    </main>
  );
}
