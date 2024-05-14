'use client';

import React, { useState } from 'react';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { LuCalendarClock } from 'react-icons/lu';
import { MdKeyboardArrowLeft, MdOutlinePersonOutline } from 'react-icons/md';

import Button from '@/components/common-components/button';

import JoinActivityModal from '@/components/join/JoinActivityModal';
import JoinSlider from '@/components/join/JoinSlider';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';

const variants = {
  prev: 'flex gap-[5px] items-center text-body2 text-gray-08 mb-[14px]',
  headerBtn:
    'flex gap-2 items-center text-gray-08 text-body3 px-[14px] py-2 bg-gray-03 rounded-[30px]',
  info: 'w-full h-[70px] flex justify-between items-center px-[30px] rounded-[20px] mb-[50px] bg-primary-orange6 text-white text-body2',
  textArea:
    'bg-gray-02 rounded-[20px] px-6 py-[23px] whitespace-pre-wrap text-gray-10 text-body3 leading-[30px]',
};

const page = () => {
  // TODO: 활동 아이디로 api 연동 예정
  const paramId = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 활동 내용 중 필터링 위함
  const [content, setContent] = useState<string>('');

  const handleJoin = () => {
    setIsOpen(true);
    console.log('신청하기');
  };

  return (
    <div className="max-w-[1200px] w-full h-full mx-auto pt-8 flex flex-col">
      <button className={variants.prev} onClick={() => router.back()}>
        <MdKeyboardArrowLeft width={16} height={16} />
        <span className="">이전으로</span>
      </button>
      <span className="text-h2 text-primary-orange6 mb-[4px]">
        일본문화 산책
      </span>
      <div className="w-full flex justify-between items-end mb-4">
        <span className="text-gray-08 text-body2">서대문노인종합복지관</span>
        <div className="flex gap-4">
          <button className={variants.headerBtn}>
            <FiShare2 width={20} height={20} />
            공유하기
          </button>
          <button className={variants.headerBtn}>
            <FiHeart width={20} height={20} />
            관심활동
          </button>
        </div>
      </div>
      <div className="w-full h-[487px] mb-[10px]">
        <JoinSlider
          imgs={[
            '/assets/main/main_banner.png',
            '/assets/main/main_banner.png',
            '/assets/main/main_banner.png',
          ]}
        />
      </div>
      <div className={variants.info}>
        <div className="flex gap-[30px]">
          <div className="flex gap-[10px] items-center">
            <GrLocation width={20} height={20} />
            <span>장소 | 서대문노인종합복지관</span>
          </div>
          <div className="flex gap-[10px] items-center">
            <LuCalendarClock width={20} height={20} />
            <span>시간 | 2024년 3월 14일 11:00 ~ 11:50</span>
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <MdOutlinePersonOutline width={20} height={20} />
          <span>신청자수 | 2/99</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-[40px]">
        <span className="text-black text-h3 text-[22px]">활동 설명</span>
        <div className={variants.textArea}>
          안녕하세요! 서대문노인종합복지관 담당자입니다.
          <br />
          저희 복지관에서 진행하는 프로그램인 ‘일본문화 산책’을 3월 14일
          11시부터 진행하고자 합니다.
          <br />
          프로그램의 주요 내용으로는 일본과 한국 정서의 차이를 이해하고 봄나들이
          겸 벚꽃 구경도 함께 하려고 합니다. 같이 즐거운 시간 보내요~ 많은 신청
          부탁드립니다^^
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-[100px]">
        <span className="text-black text-h3 text-[22px]">요청사항</span>
        <textarea
          className={clsx(
            variants.textArea,
            'placeholder:text-h5 placeholder:text-gray-06 focus-visible:outline-primary-orange6',
          )}
          placeholder="관리자에게 전달하고 싶은 요청사항을 적어주세요. (500자 이내)"
        ></textarea>
      </div>
      <div className="w-full flex justify-center">
        <Button size={'lg'} shape={'rounded'} onClick={handleJoin}>
          활동 신청하기
        </Button>
      </div>
      <JoinActivityModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default page;
