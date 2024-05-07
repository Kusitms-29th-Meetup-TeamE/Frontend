'use client';

import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineLock } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

import Button from '@/components/common-components/button';
import { useGlobalModal } from '@/components/common-components/global-modal';
import Input from '@/components/common-components/input';
import { SelectItemType } from '@/components/common-components/select-box';
import SelectBox from '@/components/common-components/select-box/SelectBox';
import Skeleton from '@/components/common-components/skeleton';

import MainTitle from '@/components/main/MainTitle';

import {
  useNotifyError,
  useNotifySuccess,
  useNotifyToast,
} from '@/hooks/useToast';

export default function TestPage() {
  const isTempLoading = true; // tanstack-query 데이터 패칭 시 가져올 isLoading

  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const handleSuccessModal = () => {
    setSuccessModal({
      open: true,
      text: 'test success modal',
    });
  };

  const handleErrorModal = () => {
    setErrorModal({
      open: true,
      text: 'test success modal',
    });
  };

  const [value, setValue] = useState<string>('');

  const tempItems: SelectItemType[] = [
    {
      id: 1,
      text: '채민',
      value: 'a',
    },
    {
      id: 2,
      text: 'ㅁㄴㅇㄹ',
      value: 'b',
    },
    {
      id: 3,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'c',
    },
    {
      id: 4,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'd',
    },
    {
      id: 5,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'e',
    },
    {
      id: 6,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'f',
    },
  ];

  const [selectItem, setSelectItem] = useState<string>();

  return (
    <>
      <div className="flex w-[200px]">
        <SelectBox items={tempItems} size="md" setParams={setSelectItem} />
      </div>

      <div className="flex flex-col gap-2 py-6 px-2">
        <Input
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
          placeholder="검색어를 입력하세요."
          shape="square"
          search
          type="text"
        />
        <Input
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
          placeholder="이메일을 입력하세요."
          shape="square"
          startIcon={<TfiEmail />}
        />
        <Input
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
          placeholder="비밀번호를 입력하세요."
          shape="square"
          type="password"
          startIcon={<MdOutlineLock />}
        />
        <Input
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="이름을 입력하세요."
          shape="square"
          startIcon={<BsPerson />}
        />
        <Input
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
          placeholder="오른쪽 버튼을 눌러 주소를 검색해보세요."
          shape="square"
        />
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-2 mt-4">
          <Button color="gray" shape="rounded" size="lg">
            이전
          </Button>
          <Button color="default" shape="rounded" size="lg">
            다음
          </Button>
        </div>

        <Button color="default" shape="square" size="xl">
          로그인
        </Button>
      </div>

      {/* main-title component 테스트 */}
      <MainTitle
        title="또바 추천 활동"
        subTitle="내가 선택한 성격을 바탕으로 나에게 맞는 활동을 추천드려요."
        className="max-w-[500px] border border-red-500"
      />
      <MainTitle
        title="또바 추천 활동"
        subTitle="내가 선택한 성격을 바탕으로 나에게 맞는 활동을 추천드려요."
        className="max-w-[1200px] border border-red-500"
      />

      {/* isLoading 관련 예시 코드 */}
      <h3>This is Skeleton component.</h3>
      <div className="flex">
        {isTempLoading ? (
          <div className="flex flex-col ">
            <Skeleton width={500} height={30} />
            <Skeleton width={500} height={30} borderRadius={5} />
            <Skeleton width={500} height={30} borderRadius={10} />
            <Skeleton width={500} height={30} borderRadius={30} />
          </div>
        ) : (
          <div>complete!</div>
        )}
      </div>

      {/* modal component 예시 코드 */}
      <h3>Modal Component</h3>
      <div className="flex gap-3">
        <button onClick={handleSuccessModal}>success 모달 열기</button>
        <button onClick={handleErrorModal}>error 모달 열기</button>
      </div>

      <>
        <div className="flex gap-2">
          <button
            className="border p-2 rounded-md"
            onClick={() => useNotifySuccess('login success')}
          >
            button1
          </button>
          <button
            className="border p-2 rounded-md"
            onClick={() => useNotifyToast({ text: 'helloworld', icon: '😈' })}
          >
            button2
          </button>
          <button
            className="border p-2 rounded-md"
            onClick={() => useNotifyError('unexpected error')}
          >
            button3
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-h1">안녕하세요 원티드 산스입니다.</div>
          <div className="text-h2">안녕하세요 원티드 산스입니다.</div>
          <div className="text-h3">안녕하세요 원티드 산스입니다.</div>
          <div className="text-h4">안녕하세요 원티드 산스입니다.</div>
          <div className="text-body1">안녕하세요 원티드 산스입니다.</div>
          <div className="text-body2">안녕하세요 원티드 산스입니다.</div>
          <div className="text-chip-bold">안녕하세요 원티드 산스입니다.</div>
          <div className="text-chip-medium">안녕하세요 원티드 산스입니다.</div>
          <div className="text-footer-bold">안녕하세요 원티드 산스입니다.</div>
          <div className="text-footer-medium">
            안녕하세요 원티드 산스입니다.
          </div>
          <div className="text-footer-regular">
            안녕하세요 원티드 산스입니다.
          </div>
        </div>

        <h1 className="font-bold">font test - bold(700)</h1>
        <h1 className="font-semibold">font test - semibold(600)</h1>
        <h1 className="font-medium">font test - medium(500)</h1>
        <h1 className="font-regular">font test - regular(400)</h1>

        <br />
        <h1 className="font-semibold">color test - primary</h1>
        <div className="bg-primary-orange1 inline-flex">color test</div>
        <div className="bg-primary-orange2 inline-flex">color test</div>
        <div className="bg-primary-orange3 inline-flex">color test</div>
        <div className="bg-primary-orange4 inline-flex">color test</div>
        <div className="bg-primary-orange5 inline-flex">color test</div>
        <div className="bg-primary-orange6 inline-flex">color test</div>
        <div className="bg-primary-orange7 inline-flex">color test</div>
        <div className="bg-primary-orange8 inline-flex">color test</div>
        <div className="bg-primary-orange9 inline-flex">color test</div>
        <div className="bg-primary-orange10 inline-flex">color test</div>

        <h1 className="font-semibold">color test - secondary</h1>
        <div className="bg-secondary-violet1 inline-flex">color test</div>
        <div className="bg-secondary-violet2 inline-flex">color test</div>
        <div className="bg-secondary-violet3 inline-flex">color test</div>
        <div className="bg-secondary-violet4 inline-flex">color test</div>
        <div className="bg-secondary-violet5 inline-flex">color test</div>
        <div className="bg-secondary-violet6 inline-flex">color test</div>
        <div className="bg-secondary-violet7 inline-flex">color test</div>
        <div className="bg-secondary-violet8 inline-flex">color test</div>
        <div className="bg-secondary-violet9 inline-flex">color test</div>
      </>
    </>
  );
}
