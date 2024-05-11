'use client';

import { useMemo } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import MainTitle from '@/components/main/MainTitle';
import RecommendItem, {
  RecommendItemProps,
} from '@/components/main/RecommendItem';

import { useMainDataList } from '@/hooks/useMain';

export default function RecommendActivity() {
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
        {mainDataList.map((item, idx) => {
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

      <div className="mt-[70px] w-full mx-auto max-w-[1200px] text-center text-body3 text-gray-10">
        <div className="inline-flex items-center gap-[2px] cursor-pointer px-3 py-1 rounded-lg hover:bg-gray-02">
          더 많은 활동 보기
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
