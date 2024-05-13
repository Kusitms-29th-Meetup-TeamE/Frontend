'use client';

import { useState } from 'react';

import Button from '@/components/common-components/button';
import Input from '@/components/common-components/input';

import SearchAddressModal from '@/components/signUp/SearchAddressModal';
import SignUpTitle from '@/components/signup/SignUpTitle';

import { style } from '@/containers/signup/FirstForm';
import { inputStyle } from '@/containers/signup/ThirdForm';

import clsx from 'clsx';
import Image from 'next/image';

export const SignUpKakao = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [step, setStep] = useState<number>(0);

  // 주소 검색 모달
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  const handlePrevClick = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (step === 0) setStep(1);
    if (step === 1) {
      //
    }
  };

  const disabledBtn = () => {
    //
    return false;
  };

  return (
    <main className="pt-[70px]">
      <div className="m-auto w-full max-w-[800px] flex flex-col justify-center items-center">
        <Image
          src={`/assets/signup/${step === 0 ? 'form1' : 'form2'}.png`}
          width={618}
          height={42}
          alt=""
          className="mb-[96px]"
        />

        <SignUpTitle
          title={'회원가입'}
          subTitle={
            step === 0
              ? '어떤 유형의 이용자이신가요?'
              : '거주지 정보를 입력해주세요.'
          }
        />

        {step === 0 && (
          <div className="flex gap-6 mt-[104px]">
            <div
              className={clsx(
                style.background,
                selectedOption === 'general' && style.clicked,
              )}
              onClick={() => handleClick('general')}
            >
              <div>이미지</div>
              <div className={style.title}>일반 회원</div>
              <div className={style.content}>
                또바를 통해 다양한 만남과 경험을 만들어 갈 회원님!
              </div>
            </div>
            <div
              className={clsx(
                style.background,
                selectedOption === 'organization' && style.clicked,
              )}
              onClick={() => handleClick('organization')}
            >
              <div>이미지</div>
              <div className={style.title}>단체/기관 회원</div>
              <div className={style.content}>
                또바 이용자에게 활동을 제공하는 회원 계정
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-[40px] flex flex-col justify-center w-full max-w-[588px]">
            <span className="pl-5 text-gray-11 text-h3">거주지</span>
            <div className="relative mt-1">
              <Input
                onChange={(e) => {}}
                size="lg"
                value={location}
                placeholder="오른쪽 버튼을 눌러 주소를 검색해보세요."
                shape="square"
              />
              <span
                onClick={() => setIsOpen(true)}
                className={clsx(inputStyle.inputBtn, inputStyle.activeBtn)}
              >
                주소 검색
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-6 w-full justify-center">
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
            onClick={handleSubmit}
            disabled={disabledBtn()}
            type="submit"
          >
            {step === 0 ? '다음' : '완료'}
          </Button>
        </div>
      </div>

      {/* 주소 검색 모달 */}
      <SearchAddressModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLocation={setLocation}
      />
    </main>
  );
};

export default SignUpKakao;
