'use client';

import { useMemo } from 'react';
import { BsPerson } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineLock } from 'react-icons/md';
import { PiNotePencil } from 'react-icons/pi';
import { TfiEmail } from 'react-icons/tfi';

import Button from '@/components/common-components/button';
import Input from '@/components/common-components/input';

import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

import { useGetMyPageInfo } from '@/hooks/api/useMyPage';
import { MyPageInfoProps } from '@/types/mypage';

import Image from 'next/image';

export default function MyPageEdit() {
  const { data } = useGetMyPageInfo();
  console.log('sdf', data);

  const userData: MyPageInfoProps = useMemo(() => data ?? [], [data]);

  return (
    <div className="w-full m-auto max-w-[1200px] border border-black">
      <Sidebar />
      <div className="mt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6 border border-blue-500">
        <MyPageTitle
          title="기본 정보 수정하기"
          content="나의 개인정보를 수정해보세요"
        />

        <div className="flex gap-[52px]">
          <div className="w-full max-w-[254px] flex flex-col justify-center">
            <label className="text-h3 text-black">프로필 사진</label>
            <Image
              src={'/assets/main/main_banner.png'}
              alt=""
              width={254}
              height={254}
              className="mt-1 object-cover rounded-[20px] w-[254px] h-[254px]"
            />
            <button className="mt-5 w-full flex items-center justify-center text-body3 text-gray-09 rounded-[6px] border border-gray-05 bg-white h-[40px]">
              <PiNotePencil />
              사진변경
            </button>
            <button className="mt-5 text-h3 text-primary-orange6">
              사진삭제
            </button>
          </div>

          <div className="w-full flex flex-col gap-[30px]">
            <div>
              <label className="text-h3 text-black">이름</label>
              <Input
                startIcon={<BsPerson />}
                size="lg"
                value={userData.name}
                placeholder="이름을 입력해주세요."
                shape="square"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-h3 text-black">계정정보</label>
              <Input
                startIcon={<TfiEmail />}
                size="lg"
                value={userData.email}
                placeholder=""
                shape="square"
                className="mt-1 bg-gray-03 text-gray-06"
                disabled
              />

              <Input
                startIcon={<MdOutlineLock />}
                size="lg"
                placeholder=""
                shape="square"
                type="password"
                value="00000000000"
                disabled
                className="mt-[10px] bg-gray-03 text-gray-06"
              />
            </div>
            <div>
              <label className="text-h3 text-black">거주지</label>
              <Input
                startIcon={<IoLocationOutline />}
                size="lg"
                value={userData.location}
                placeholder=""
                shape="square"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            //   onClick={handleSubmit}
            size="md"
            color="default"
            className="my-[80px] flex justify-center !py-2 !px-[30px]"
          >
            변경사항 저장
          </Button>
        </div>

        <div className="py-[30px] px-5 border-t border-gray-04 w-full">
          <p className="text-gray-09 text-h3">계정 삭제하기</p>
          <span className="mt-1 text-h5 text-gray-06">
            계정 삭제시 서비스 내 모든 정보는 초기화됩니다.
          </span>
        </div>
      </div>
    </div>
  );
}
