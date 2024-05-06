'use client';

import { useState } from 'react';

import Button from '@/components/common-components/button';

import FifthForm from '@/containers/signup/FifthForm';
import FirstForm from '@/containers/signup/FirstForm';
import FourthForm from '@/containers/signup/FourthForm';
import SecondForm, { checkData } from '@/containers/signup/SecondForm';
import ThirdForm from '@/containers/signup/ThirdForm';

import clsx from 'clsx';

const btnStyle = {
  form1: 'mt-[104px]',
  form2: 'mt-[233px]',
  form3: 'mt-[350px]',
  form4: 'mt-[130px]',
  form5: 'mt-[166px]',
};

export default function SignUp() {
  const [step, setStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [checkItems, setCheckItems] = useState(() => {
    return checkData.map(() => false);
  });

  const handlePrevClick = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleNextClick = () => {
    if (step < 4) {
      setStep(step + 1);
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
  };

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
      {step === 2 && <ThirdForm />}
      {step === 3 && <FourthForm />}
      {step === 4 && <FifthForm />}

      <div
        className={clsx(
          'flex gap-6 border border-black w-full justify-center',
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
          disabled={disabledBtn()}
        >
          {step !== 4 ? '다음' : '완료'}
        </Button>
      </div>
    </main>
  );
}
