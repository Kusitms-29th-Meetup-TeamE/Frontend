'use client';

import { useEffect, useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';

import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

import { pointNotice } from '@/constants/object';
import { useNotifySuccess } from '@/hooks/useToast';

import { formatDate } from '@/utils';

export default function MyPoint() {
  const [today, setToday] = useState<Date | null>(null);
  const [name, setName] = useState<string>('');

  // const name = localStorage.getItem('name');

  useEffect(() => {
    setToday(new Date());
    setName(localStorage.getItem('name') as string);
  }, []);

  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="pt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="포인트 내역 보기"
          content="또바에서 모은 포인트 적립 내역을 확인해보고 이를 현금으로 사용해보세요"
        />

        <div className="bg-gray-01 border border-gray-03 rounded-[20px]">
          <div className="px-[30px] pt-[26px] pb-[6px] flex flex-col gap-1">
            <div className="flex justify-between text-body2">
              <span>
                <span className="text-primary-orange6">{name ?? '또바기'}</span>
                님의 사용 가능 포인트
              </span>
              <span className="text-notification-chip-no text-gray-06">
                {formatDate(today as Date)} 기준
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-04 pb-[30px]">
              <span className="text-body1 text-black mt-[10px]">
                <span className="text-primary-orange6">300</span>
                포인트
              </span>
              <span
                onClick={() => useNotifySuccess('초기화가 완료되었습니다.')}
                className="cursor-pointer flex gap-[6px] items-center text-gray-07 text-notification-chip-no"
              >
                초기화 <GrPowerReset />
              </span>
            </div>
          </div>
          <div className="py-6 px-[40px] flex flex-col gap-5">
            <span className="flex justify-between text-body2 text-gray-08">
              <span>이번달 적립 포인트</span>
              <span>+ 150 포인트</span>
            </span>
            <span className="flex justify-between text-body2 text-gray-08">
              <span>소멸 예정 포인트</span>
              <span>- 100 포인트</span>
            </span>
          </div>
        </div>

        <div className="mt-[10px]">
          <p className="pl-[30px] text-footer-bold text-black">
            이런 활동을 하면 포인트를 드려요!
          </p>

          <div className="flex flex-col gap-[14px] mt-[30px]">
            {pointNotice.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex justify-between items-center py-[14px] px-[40px] bg-gray-02 rounded-[20px] h-[58px] w-full max-w-[894px]"
                >
                  <span className="text-gray-10 text-h3">{item.text}</span>
                  <span className="text-primary-orange6 text-body2">
                    {item.point} 포인트
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
