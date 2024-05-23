'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { LuCalendarClock } from 'react-icons/lu';
import { MdKeyboardArrowLeft, MdOutlinePersonOutline } from 'react-icons/md';

import Button from '@/components/common-components/button';
import Textarea from '@/components/common-components/textarea';

import JoinActivityModal from '@/components/join/JoinActivityModal';
import JoinSlider from '@/components/join/JoinSlider';

import { useActivityDetail } from '@/hooks/api/useActivity';
import { usePostChatRoomsGroup } from '@/hooks/api/useChat';
import { DetailProps } from '@/types/activity';

import { useRouter, useSearchParams } from 'next/navigation';

const variants = {
  prev: 'w-fit h-fit px-[5px] pr-[10px] py-[5px] flex gap-[5px] items-center text-body2 text-gray-08 mb-[14px] hover:bg-gray-02 border-box rounded-[10px]',
  headerBtn:
    'flex gap-2 justify-center items-center text-gray-08 text-body3 px-[14px] py-2 bg-gray-03 rounded-[30px]',
  info: 'w-full h-[70px] flex justify-between items-center px-[30px] rounded-[20px] mb-[50px] bg-primary-orange6 text-white text-body2',
  content:
    'bg-gray-02 rounded-[20px] px-6 py-[23px] whitespace-pre-wrap text-gray-10 text-body3 leading-[30px]',
};

const page = ({ params }: DetailProps) => {
  // TODO: 활동 아이디로 api 연동 예정
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const detailId = searchParams.get('id');

  const { data, isLoading, error } = useActivityDetail(Number(detailId));

  const [resData, setResData] = useState<any>({});

  // 활동 내용 중 필터링 위함
  const [content, setContent] = useState<string>('');

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { mutate } = usePostChatRoomsGroup(resData?.id);

  const handleJoin = () => {
    setIsOpen(true);
    // console.log('신청하기');
    mutate();
  };

  useEffect(() => {
    if (data) {
      setResData(data);
    }
  }, [data]);

  return (
    <Suspense>
      <div className="max-w-[1200px] w-full h-full mx-auto pt-8 flex flex-col">
        <button className={variants.prev} onClick={() => router.back()}>
          <MdKeyboardArrowLeft width={16} height={16} />
          <span>이전으로</span>
        </button>
        <span className="text-h2 text-primary-orange6 mb-[4px]">
          {resData.title}
        </span>
        <div className="w-full flex justify-between items-end mb-4">
          <span className="text-gray-08 text-body2">{resData.agency}</span>
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
            img={resData.imageUrl ?? '/assets/main/main_banner.png'}
          />
        </div>
        <div className={variants.info}>
          <div className="flex gap-[30px]">
            <div className="flex gap-[10px] items-center">
              <GrLocation width={20} height={20} />
              <span>장소 | {resData.agency}</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <LuCalendarClock width={20} height={20} />
              <span>시간 | {resData.time}</span>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <MdOutlinePersonOutline width={20} height={20} />
            <span>
              신청자수 | {resData.currentParticipants} /{' '}
              {resData.maxParticipants}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-[40px]">
          <span className="text-black text-h3 text-[22px]">활동 설명</span>
          <div className={variants.content}>{resData.description}</div>
        </div>
        <div className="flex flex-col gap-3 mb-[100px]">
          <span className="text-black text-h3 text-[22px]">요청사항</span>
          <Textarea
            placeholder="관리자에게 전달하고 싶은 요청사항을 적어주세요. (500자 이내)"
            size="md"
            ref={textAreaRef}
            onChange={() => {
              // console.log(textAreaRef.current?.value);
              if (textAreaRef.current?.value) setIsDisabled(false);
              else setIsDisabled(true);
            }}
          />
        </div>
        <div className="w-full flex justify-center">
          <Button
            color={!isDisabled ? 'default' : 'disabled'}
            size={'lg'}
            shape={'rounded'}
            onClick={handleJoin}
            disabled={isDisabled}
          >
            활동 신청하기
          </Button>
        </div>
        <JoinActivityModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </Suspense>
  );
};

export default page;
