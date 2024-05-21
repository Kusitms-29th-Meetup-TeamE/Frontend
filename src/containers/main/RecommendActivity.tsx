'use client';

import { useMemo } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import MainTitle from '@/components/main/MainTitle';
import RecommendItem from '@/components/main/RecommendItem';

import { useMainDataList } from '@/hooks/api/useMain';
import { RecommendItemProps } from '@/types/activity';

import { useRouter } from 'next/navigation';

export default function RecommendActivity() {
  const router = useRouter();
  const { data: mainData, isLoading, error } = useMainDataList();

  const mainDataList: RecommendItemProps[] = useMemo(
    () => mainData?.activities ?? [],
    [mainData],
  );

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <MainTitle
        title="또바 추천 활동"
        subTitle="내가 선택한 성격을 바탕으로 나에게 맞는 활동을 추천드려요."
        className="mb-[50px]"
      />

      <div className="flex gap-6 justify-center">
        {mainDataList.slice(0, 3).map((item, idx) => {
          return (
            <RecommendItem
              isLoading={isLoading}
              key={idx}
              title={item.title}
              location={item.location}
              img={item.img}
              currentParticipants={item.currentParticipants}
              maxParticipants={item.maxParticipants}
              time={item.time}
              isLiked={item.isLiked}
              // className={idx === 0 ? 'w-1/2' : 'w-auto'}
              personalities={item.personalities}
              // className="transition duration-2000 ease-in-out delay-1000 hover:w-[576px]"
            />
          );
        })}
      </div>

      <div
        className="mt-[70px] w-full mx-auto max-w-[1200px] text-center text-body3 text-gray-10"
        onClick={() => router.push('/join')}
      >
        <div className="inline-flex items-center gap-[2px] cursor-pointer px-3 py-1 rounded-lg hover:bg-gray-02">
          더 많은 활동 보기
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
