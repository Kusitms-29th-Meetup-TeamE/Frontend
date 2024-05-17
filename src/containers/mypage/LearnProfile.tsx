import { useState } from 'react';

import Input from '@/components/common-components/input';
import SelectBox from '@/components/common-components/select-box/SelectBox';

import SearchAddressModal from '@/components/signup/SearchAddressModal';

import { dayItems, monthItems, yearItems } from '@/constants/object';

import clsx from 'clsx';
import Image from 'next/image';

const formStyle = {
  label: 'pl-5 mb-[10px] text-h3 text-black',
  inputBtn:
    'absolute right-7 top-[45px] px-[10px] py-[9px] bg-primary-orange1 text-primary-orange6 cursor-pointer rounded-[6px] items-center flex justify-center h-[30px] w-full max-w-[90px]',
};

export default function LearnProfile() {
  const [name, setName] = useState<string>('이채민');

  const [year, setYear] = useState<string | number>('');
  const [month, setMonth] = useState<string | number>('');
  const [day, setDay] = useState<string | number>('');

  const [location, setLocation] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<string>('');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full max-w-[588px] flex flex-col gap-[30px] py-5 px-6 rounded-[20px] bg-gray-02">
        <div>
          <label className={formStyle.label}>사진 등록하기</label>
          <Image
            //   TODO: 플러스 아이콘 넣기
            src={'/assets/main/main_banner.png'}
            alt=""
            width={150}
            height={150}
            className="rounded-full object-cover w-[150px] h-[150px]"
          />
        </div>
        <div>
          <label className={formStyle.label}>이름</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="lg"
            placeholder=""
            shape="square"
            className="h-[60px]"
          />
        </div>
        <div>
          <label className={formStyle.label}>나이</label>
          <div className="flex gap-[6px]">
            <SelectBox
              initText="년"
              items={yearItems}
              size="md"
              setParams={setYear}
              className="h-[60px]"
            />
            <SelectBox
              initText="월"
              items={monthItems}
              size="md"
              setParams={setMonth}
              className="h-[60px]"
            />
            <SelectBox
              initText="일"
              items={dayItems}
              size="md"
              setParams={setDay}
              className="h-[60px]"
            />
          </div>
        </div>
        <div className="relative">
          <label className={formStyle.label}>활동 지역</label>
          <Input
            onChange={() => {
              // console.log(emailInputRef.current?.value);
            }}
            size="lg"
            value={location}
            placeholder="오른쪽 버튼을 눌러 주소를 검색해보세요."
            shape="square"
            className="h-[60px]"
          />
          <span
            onClick={() => setIsOpen(true)}
            className={clsx(formStyle.inputBtn)}
          >
            주소 검색
          </span>
        </div>
        <div>
          <label className={formStyle.label}>한마디</label>
          <Input
            value={statusMsg}
            onChange={(e) => setStatusMsg(e.target.value)}
            size="lg"
            placeholder="나의 마음가짐을 자유롭게 적어주세요! (100자 내외)"
            shape="square"
            className="h-[60px]"
          />
        </div>
        <div>
          <label className={formStyle.label}>나의 경험 목록</label>
          <div>컴포넌트 붙여넣기</div>
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
