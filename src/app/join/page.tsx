'use client';

import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa6';

import Input from '@/components/common-components/input';
import Pagination from '@/components/common-components/pagination/Pagination';

import ActivityHeader from '@/components/join/ActivityHeader';

import ActivityContainer, {
  ActivityType,
} from '@/containers/join/ActivityContainer';
import ChipContainer from '@/containers/join/ChipContainer';
import useSelectedJoinChipStore from '@/store/selectedJoinChipStore';

import clsx from 'clsx';

const page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const initCurrentChips = useSelectedJoinChipStore(
    (state) => state.initCurrentChips,
  );

  // API response 받고 수정 예정
  const data: ActivityType[] = [
    {
      //1
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //2
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //3
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //4
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //5
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //6
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //7
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //8
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //9
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //10
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //11
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
    {
      //12
      title: '자연의 맛 요리 배우기',
      location: '서대문노인종합복지관',
      time: '4월 20일 토요일',
      imageUrl: '/assets/main/main_banner.png',
      personalities: ['활발한'],
      isLiked: false,
    },
  ];

  useEffect(() => {
    // 관심활동 클릭 시 선택된 태그 초기화
    if (isLiked) {
      initCurrentChips();
    }
  }, [isLiked]);

  return (
    <>
      <ActivityHeader
        title={'활동 참여하기'}
        content={'취향에 맞는 활동을 찾고 참여하세요!'}
      />
      <div className="max-w-[1210px] w-full mx-auto border">
        <div className="mt-[60px] flex justify-between">
          <Input
            onChange={() => console.log('input 클릭')}
            placeholder={'찾으시는 활동을 검색해보세요!'}
            search={true}
            shape={'rounded'}
            size={'sm'}
          />
          <div
            className={clsx(
              'mb-6 flex items-center gap-[10px] px-[18px] py-[8px] rounded-[30px] text-body3 whitespace-nowrap cursor-pointer',
              isLiked
                ? 'bg-primary-orange6 text-white'
                : 'bg-gray-02 text-gray-09',
            )}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <FaHeart
              width={20}
              height={20}
              className={clsx(isLiked ? 'text-white' : 'text-primary-orange6')}
            />
            <span>관심활동 모아보기</span>
          </div>
        </div>
        <ChipContainer className="mb-10" />
        <ActivityContainer data={data} className="mb-[100px]" />
        <Pagination
          totalPages={8}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default page;
