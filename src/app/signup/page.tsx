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

  const [authEmail, setAuthEmail] = useState<boolean>(true);

  // 각 단계에서 입력한 데이터를 저장할 상태 추가
  const [formData, setFormData] = useState<any>({
    firstForm: {}, // 첫 번째 단계 데이터
    secondForm: {}, // 두 번째 단계 데이터
    thirdForm: {}, // 세 번째 단계 데이터
    fourthForm: {}, // 네 번째 단계 데이터
  });

  const handlePrevClick = () => {
    if (step > 0) {
      setStep(step - 1);

      // 이전 단계 데이터 저장
      // switch (step) {
      //   case 1:
      //     setFormData({ ...formData, firstForm: selectedOption });
      //     break;
      //   case 2:
      //     setFormData({ ...formData, secondForm: checkItems });
      //     break;
      //   case 3:
      //     setFormData({ ...formData, thirdForm: authEmail });
      //     break;
      //   default:
      //     break;
      // }
    }
  };

  const handleNextClick = () => {
    if (step < 4) {
      setStep(step + 1);
    }
    if (step === 4) {
      // TODO: onSubmit?
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
    if (step === 2 && authEmail) return true;

    return false;
  };

  const onSubmitFourthForm = (data: any) => {
    // FourthForm의 onSubmit에 전달할 로직 구현
    console.log('Submitted from FourthForm:', data);
    // 필요한 로직 수행
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
      {step === 2 && (
        <ThirdForm authEmail={authEmail} setAuthEmail={setAuthEmail} />
      )}
      {step === 3 && <FourthForm />}
      {step === 4 && <FifthForm />}

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
          disabled={disabledBtn()}
          type="submit"
        >
          {step !== 4 ? '다음' : '완료'}
        </Button>
      </div>
    </main>
  );
}