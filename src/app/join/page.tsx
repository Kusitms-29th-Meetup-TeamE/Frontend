'use client';

import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa6';

import Input from '@/components/common-components/input';
import Pagination from '@/components/common-components/pagination';

import ActivityBanner from '@/components/join/ActivityBanner';

import { useAllActivity, useLikedActivity } from '@/hooks/api/useActivity';

import ActivityContainer from '@/containers/join/ActivityContainer';
import ChipContainer from '@/containers/join/ChipContainer';
import useSelectedJoinChipStore from '@/store/join/selectedJoinChipStore';

import clsx from 'clsx';

const page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const initChips = useSelectedJoinChipStore((state) => state.initChips);

  const currentAgency = useSelectedJoinChipStore(
    (state) => state.currentAgency,
  );
  const currentPersonality = useSelectedJoinChipStore(
    (state) => state.currentPersonality,
  );

  const { data, refetch } = useAllActivity({
    page: currentPage - 1,
    agencyTypes:
      currentAgency.length === 0 || currentAgency.includes('전체')
        ? undefined
        : currentAgency.join(','),
    personalities: currentPersonality,
  });

  const { data: likedData, refetch: likedRefetch } = useLikedActivity({
    page: currentPage - 1,
    agencyTypes:
      currentAgency.length === 0 || currentAgency.includes('전체')
        ? undefined
        : currentAgency.join(','),
    personalities: currentPersonality,
  });

  useEffect(() => {
    refetch();
    likedRefetch();
  }, [currentAgency, currentPersonality]);

  useEffect(() => {
    // 관심활동 클릭 시 선택된 태그 초기화
    if (isLiked) {
      initChips();
    }
  }, [isLiked]);

  return (
    <>
      <ActivityBanner
        title={'활동 참여하기'}
        content={'취향에 맞는 활동을 찾고 참여하세요!'}
        imgUrl={'/assets/components/activity-top-banner.png'}
      />
      <div className="max-w-[1210px] w-full mx-auto">
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
        <ActivityContainer
          data={
            !isLiked
              ? data && data.activitySummaries
              : likedData && likedData.activitySummaries
          }
          className="mb-[100px]"
        />
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
