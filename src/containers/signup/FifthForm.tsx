import { useState } from 'react';

import Input from '@/components/common-components/input';
import { SelectItemType } from '@/components/common-components/select-box';
import SelectBox from '@/components/common-components/select-box/SelectBox';

import SignUpTitle from '@/components/signUp/SignUpTitle';

import { inputStyle } from './ThirdForm';

import clsx from 'clsx';
import Image from 'next/image';

const style = {
  genderBase:
    'cursor-pointer border border-gray-05 text-h4 text-gray-06 rounded-[20px] py-5 w-full flex justify-center items-center',
  genderClicked:
    'bg-primary-orange1 border border-primary-orange6 text-h3 text-primary-orange6',
};

export const monthItems: SelectItemType[] = [
  { id: 1, text: '1월', value: 1 },
  { id: 2, text: '2월', value: 2 },
  { id: 3, text: '3월', value: 3 },
  { id: 4, text: '4월', value: 4 },
  { id: 5, text: '5월', value: 5 },
  { id: 6, text: '6월', value: 6 },
  { id: 7, text: '7월', value: 7 },
  { id: 8, text: '8월', value: 8 },
  { id: 9, text: '9월', value: 9 },
  { id: 10, text: '10월', value: 10 },
  { id: 11, text: '11월', value: 11 },
  { id: 12, text: '12월', value: 12 },
];

export const yearItems: SelectItemType[] = [];

const currentYear = new Date().getFullYear();
const startYear = 1900; // 시작 연도
const endYear = currentYear; // 현재 연도

for (let year = startYear; year <= endYear; year++) {
  yearItems.push({
    id: year,
    text: `${year}년`,
    value: year,
  });
}

export const dayItems: SelectItemType[] = [];

for (let day = 1; day <= 31; day++) {
  dayItems.push({
    id: day,
    text: `${day}일`,
    value: day,
  });
}

export default function FifthForm() {
  const [email, setEmail] = useState<string>('');
  const [confirmNum, setConfirmNum] = useState<Number | null>(null);
  const [gender, setGender] = useState<string>('');

  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');

  const handleGender = (gender: string) => {
    setGender(gender);
  };

  return (
    <div className="m-auto w-full max-w-[800px] flex flex-col justify-center items-center">
      <Image
        src={'/assets/signup/form5.png'}
        width={618}
        height={42}
        alt=""
        className="mb-[96px]"
      />

      <SignUpTitle title={'회원가입'} subTitle={'세부 정보를 입력해주세요.'} />

      <div className="mt-[40px] flex flex-col justify-center gap-5 w-full max-w-[588px]">
        <div>
          <span className="pl-5 text-gray-11 text-h3">생년월일</span>

          <div className="flex gap-[6px] mt-1">
            <SelectBox
              initText="년"
              items={yearItems}
              size="md"
              setParams={setYear}
            />
            <SelectBox
              initText="월"
              items={monthItems}
              size="md"
              setParams={setMonth}
            />
            <SelectBox
              initText="일"
              items={dayItems}
              size="md"
              setParams={setDay}
            />
          </div>
        </div>

        <div>
          <span className="pl-5 text-gray-11 text-h3">성별</span>
          <div className="flex gap-[6px] mt-1">
            <div
              className={clsx(
                style.genderBase,
                gender === 'male' && style.genderClicked,
              )}
              onClick={() => handleGender('male')}
            >
              남자
            </div>
            <div
              className={clsx(
                style.genderBase,
                gender === 'female' && style.genderClicked,
              )}
              onClick={() => handleGender('female')}
            >
              여자
            </div>
          </div>
        </div>

        <div className="">
          <span className="pl-5 text-gray-11 text-h3">거주지</span>

          <div className="relative mt-1">
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
