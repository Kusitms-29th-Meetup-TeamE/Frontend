import { useState } from 'react';

import Input from '@/components/common-components/input';
import SelectBox from '@/components/common-components/select-box/SelectBox';

import SearchAddressModal from '@/components/signUp/SearchAddressModal';
import SignUpTitle from '@/components/signUp/SignUpTitle';

import { dayItems, monthItems, yearItems } from '@/constants/object';

import { inputStyle } from './ThirdForm';

import clsx from 'clsx';
import Image from 'next/image';

const style = {
  genderBase:
    'cursor-pointer border border-gray-05 text-h4 text-gray-06 rounded-[20px] py-5 w-full flex justify-center items-center',
  genderClicked:
    'bg-primary-orange1 border border-primary-orange6 !text-h3 text-primary-orange6',
};

export default function FifthForm() {
  const [email, setEmail] = useState<string>('');
  const [confirmNum, setConfirmNum] = useState<Number | null>(null);
  const [gender, setGender] = useState<string>('');

  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');

  // 주소 검색 모달
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');

  const handleGender = (gender: string) => {
    setGender(gender);
  };

  console.log('loc', location);

  return (
    <>
      <div className="m-auto w-full max-w-[800px] flex flex-col justify-center items-center">
        <Image
          src={'/assets/signup/form5.png'}
          width={618}
          height={42}
          alt=""
          className="mb-[96px]"
        />

        <SignUpTitle
          title={'회원가입'}
          subTitle={'세부 정보를 입력해주세요.'}
        />

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
        </div>
      </div>

      {/* 주소 검색 모달 */}
      <SearchAddressModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLocation={setLocation}
      />
    </>
  );
}
