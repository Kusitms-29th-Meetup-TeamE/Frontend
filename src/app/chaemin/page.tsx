'use client';

import { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineLock } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

import Button from '@/components/common-components/button';
import { useGlobalModal } from '@/components/common-components/global-modal';
import Input from '@/components/common-components/input';
import { Modal } from '@/components/common-components/modal';
import { SelectItemType } from '@/components/common-components/select-box';
import SelectBox from '@/components/common-components/select-box/SelectBox';
import Skeleton from '@/components/common-components/skeleton';

import { AppointmentModal } from '@/components/chat/AppointmentModal';
import { MyMsgItem } from '@/components/chat/MyMsgItem';
import { OtherMsgItem } from '@/components/chat/OtherMsgItem';
import { RoomItem } from '@/components/chat/RoomItem';
import MainTitle from '@/components/main/MainTitle';
import MyExperienceItem from '@/components/mypage/MyExperienceItem';
import MyPageTitle from '@/components/mypage/MypageTItle';

import { useChatRoomsDirect, useChatRoomsGroup } from '@/hooks/api/useChat';
import {
  useNotifyError,
  useNotifySuccess,
  useNotifyToast,
} from '@/hooks/useToast';

import { getChatRoomsGroup } from '@/api/chat';
import { postEmailAuth } from '@/api/user';
import LearnProfile from '@/containers/mypage/LearnProfile';

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
      value: 'fs',
    },
    {
      id: 7,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'fsf',
    },
    {
      id: 8,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'fvv',
    },
    {
      id: 9,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'fxx',
    },
    {
      id: 10,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'fqq',
    },
    {
      id: 11,
      text: 'ㅁㅁㅁㄴㅇㄹ',
      value: 'fzzzz',
    },
  ];

  const [selectItem, setSelectItem] = useState<string | number>();

  const [location, setLocation] = useState<string>('');

  const handleComplete = (data: any) => {
    setLocation(data.roadAddress);
    onToggleModal();
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  // 주소 검색 모달
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const [authAnswer, setAuthAnswer] = useState<string | void>('');
  const [authInput, setAuthInput] = useState<string>('');

  const sendAuthNumber = async () => {
    await postEmailAuth('chamny20@naver.com').then((res) => {
      setAuthAnswer(`${res}`);
    });
  };

  const checkAuthNum = (input: any) => {};

  const [appointmentOpen, setAppointmentOpen] = useState<boolean>(false);

  // chat-api test - 05.14 기준 연결 성공

  const { data, isLoading } = useChatRoomsGroup();
  const { data: directData } = useChatRoomsDirect();

  return (
    <>
      {/* <RoomItem /> */}
      {/* <div className="flex flex-col gap-[30px]">
        <OtherMsgItem />
        <MyMsgItem />
        <OtherMsgItem />
      </div> */}
      <div className="flex flex-col">
        <MyPageTitle
          title="배움 프로필 수정하기"
          content="배움 나누기 활동을 통해 얻은 경험 내역을 확인해보세요"
        />
        <LearnProfile />
        {/* <MyExperienceItem /> */}
      </div>

      <br />
      <br />
      <br />

      <Button onClick={() => setAppointmentOpen(true)}>
        약속잡기모달테스트
      </Button>

      {/* 주소 검색 테스트 */}
      <Button size="lg" onClick={() => setIsOpen(true)}>
        주소 검색
      </Button>
      {isOpen && (
        <Modal open={isOpen} onClose={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>
        <h2>{location}</h2>
      </div>

      <button
        onClick={() => {
          useNotifySuccess('인증번호가 발송되었습니다.');
          sendAuthNumber();
        }}
      >
        인증 번호 발송 버튼
      </button>

      <input
        placeholder="인증번호 입력"
        value={authInput}
        onChange={(e) => setAuthInput(e.currentTarget.value)}
      />
      <button onClick={() => checkAuthNum(authInput)}>인증 확인 버튼</button>

      <div className="flex flex-col w-[200px]">
        <SelectBox items={tempItems} size="md" setParams={setSelectItem} />
        <SelectBox
          initText="이름"
          items={tempItems}
          size="md"
          setParams={setSelectItem}
        />
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
