import { Dispatch, SetStateAction, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import Checkbox from '@/components/common-components/check-box/Checkbox';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import clsx from 'clsx';
import Image from 'next/image';

export const checkData = [
  { type: '[필수]', text: '만 15세 이상입니다.' },
  { type: '[필수]', text: '개인회원 이용약관 동의' },
  { type: '[필수]', text: '개인정보 수집 및 이용 동의' },
  { type: '[선택]', text: '마케팅 수신 동의' },
];

export type SecondFormProps = {
  checkItems: boolean[];
  setCheckItems: Dispatch<SetStateAction<boolean[]>>;
};

export default function SecondForm(props: SecondFormProps) {
  const { checkItems, setCheckItems } = props;

  const handleCheckChange = (idx: number) => {
    setCheckItems((prev) => {
      const newCheckItems = [...prev];
      newCheckItems[idx] = !newCheckItems[idx];
      return newCheckItems;
    });
  };

  const handleTotalCheck = () => {
    setCheckItems((prev) => {
      const newCheckItems = prev.map(() => !prev[0]);
      return newCheckItems;
    });
  };

  const totalCheck = checkItems.every(Boolean);

  return (
    <div className="m-auto border border-black w-full max-w-[800px] flex flex-col justify-center items-center">
      <Image
        src={'/assets/signup/form2.png'}
        width={618}
        height={42}
        alt=""
        className="mb-[96px]"
      />

      <SignUpTitle
        title={'회원가입'}
        subTitle={'필수항목 및 선택항목 약관에 동의해주세요.'}
      />

      <div className="w-full max-w-[588px] mt-[74px]">
        <div
          className="cursor-pointer text-gray-06 border border-gray-05 text-h3 px-7 py-5 rounded-[20px] flex items-center"
          onClick={handleTotalCheck}
        >
          <Checkbox
            width={19}
            height={19}
            isChecked={totalCheck}
            handleCheck={handleTotalCheck}
          />
          <span
            className={clsx('ml-[18px]', totalCheck && 'text-primary-orange6')}
          >
            전체동의 (선택 항목에 대한 동의 포함)
          </span>
        </div>
        <div className="pt-[30px] px-7 flex flex-col gap-[22px]">
          {checkData.map((item, idx) => {
            return (
              <div
                className="flex items-center justify-between cursor-pointer"
                key={idx}
              >
                <div
                  className="flex items-center"
                  onClick={() => handleCheckChange(idx)}
                >
                  <Checkbox
                    width={19}
                    height={19}
                    isChecked={checkItems[idx]}
                    handleCheck={() => {
                      handleCheckChange(idx);
                    }}
                  />
                  <span
                    className={clsx(
                      'ml-[18px] mr-[10px] text-gray-06 text-h3',
                      checkItems[idx] && 'text-gray-08',
                    )}
                  >
                    {item.type}
                  </span>
                  <span
                    className={clsx(
                      'text-gray-06 text-h4',
                      checkItems[idx] && 'text-gray-08',
                    )}
                  >
                    {item.text}
                  </span>
                </div>

                <IoIosArrowForward
                  className={clsx(
                    'text-gray-06',
                    checkItems[idx] && 'text-gray-08',
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
