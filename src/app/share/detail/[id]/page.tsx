'use client';

import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PiChatTextBold } from 'react-icons/pi';

import Button from '@/components/common-components/button';
import Chip from '@/components/common-components/chip';

import OtherLearningItem from '@/components/share/OtherLearningItem';
import ReviewSlider from '@/components/share/ReviewSlider';

import { usePostChatRoomsDirect } from '@/hooks/api/useChat';
import { useLearningDetail } from '@/hooks/api/useLearning';
import { DetailProps } from '@/types/activity';
import { OthreLearningItemProps, ReviewProps } from '@/types/learning';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const variants = {
  prev: 'w-fit h-fit px-[5px] pr-[10px] py-[5px] flex gap-[5px] items-center text-body2 text-gray-08 mb-[14px] hover:bg-gray-02 border-box rounded-[10px]',
  profile: 'w-full flex items-center',
  bubble:
    'absolute h-0 w-0 border-r-[21px] border-t-transparent border-b-transparent border-t-[10px] border-b-[10px] border-solid border-gray-03',
  bubbleBody:
    'w-[450px] min-h-[66px] bg-gray-03 rounded-[20px] text-body2 text-gray-11 pl-[31px] pr-[40px] py-[18px]',
};

const page = ({ params }: DetailProps) => {
  const router = useRouter();

  const { data, isLoading, refetch } = useLearningDetail(params.id);

  const [resData, setResData] = useState<any>({});

  useEffect(() => {
    if (data) {
      setResData(data);
    }
  }, [data]);

  const { mutate } = usePostChatRoomsDirect(data?.id);

  const handleClick = () => {
    mutate();
    // console.log('채팅방으로 이동');
  };

  return (
    <>
      <div className="max-w-[1200px] w-full h-full mx-auto pt-8 flex flex-col">
        <button className={variants.prev} onClick={() => router.back()}>
          <MdKeyboardArrowLeft width={16} height={16} />
          <span>이전으로</span>
        </button>
        <section className={variants.profile}>
          <Image
            width={482}
            height={313}
            src={'/assets/share/profile.png'}
            alt={''}
            className="absolute ml-[46px] object-cover"
          />
          <Image
            width={344}
            height={344}
            src={data ? data.imageUrl : '/assets/main/main_banner.png'}
            alt={''}
            className="w-[344px] h-[344px] ml-[146px] rounded-full border-primary-orange6 border-4 object-cover"
          />
          <section className="ml-[87px] flex flex-col gap-[22px]">
            <span className="ml-[38px] text-black text-notification-h1">
              {data && data.name}
            </span>
            <div className="ml-[21px] w-fit flex gap-[10px] items-center bg-gray-03 rounded-[18px] px-[14px] py-1">
              <span>{data && data.age}세</span>
              <span>|</span>
              <span>{data && data.gender}</span>
              <span>|</span>
              <span>{data && data.location}</span>
            </div>
            <div className="relative ml-[21px]">
              <div className={clsx(variants.bubble, 'top-1/3 left-[-20px]')} />
              <div className={variants.bubbleBody}>
                "{data && data.oneWord}"
              </div>
            </div>
          </section>
        </section>
        <section className="w-full h-fit flex flex-col gap-[30px] mt-5">
          <div className="text-footer-bold">
            <span className="text-primary-orange6">
              '{data && data.title}'{' '}
            </span>
            <span className="text-black">배움 나누기 설명</span>
          </div>
          <div className="w-full h-fit bg-gray-02 rounded-[20px] p-7 whitespace-pre-wrap">
            {data && data.content}
          </div>
          <Button
            size="md"
            startIcon={
              <PiChatTextBold
                width={22}
                height={22}
                className="text-white w-[22px] h-[22px] mr-[6px]"
              />
            }
            className="w-fit px-[14px] mx-auto whitespace-nowrap rounded-[30px] mt-5"
            onClick={handleClick}
          >
            1:1 대화나누기
          </Button>
        </section>
      </div>
      <section className="w-full h-[450px] mt-[70px] bg-gray-02 py-[60px] px-[360px]">
        <div className="text-footer-bold">
          <span className="text-primary-orange6">{data && data.name} </span>
          <span className="text-black">배움 선배님이 받은 후기</span>
        </div>
        <div className="mt-[27px] flex gap-[10px]">
          {data &&
            data.reviews.map((item: ReviewProps) => (
              <Chip
                text={item.type}
                key={item.type}
                isBtn={true}
                isPersonality={false}
                // isActivity={true} // 스타일 적용 위함
                // isLearning={true}
                isSelected={false}
                className="cursor-pointer"
              />
            ))}
        </div>
        <div className="mt-[38px]">
          {data && <ReviewSlider reviewList={data.reviews} />}
        </div>
      </section>
      <section className="w-full mt-[60px] pt-[60px] pb-[100px] px-[360px]">
        <div className="text-footer-bold">
          <span className="text-primary-orange6">{data && data.name} </span>
          <span className="text-black">배움 선배님의 다른 배움 나누기</span>
        </div>
        <div className="flex gap-6 mt-5">
          {data &&
            data.otherExperiences.map((item: OthreLearningItemProps) => (
              <OtherLearningItem
                type={item.type}
                title={item.title}
                key={item.title}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default page;
