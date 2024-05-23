'use client';

import { useMemo } from 'react';

import MyLearnListItem from '@/components/mypage/MyLearnListItem';
import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

import { useGetReviewsByMe } from '@/hooks/api/useMyPage';
import { ReviewsByMeItem } from '@/types/mypage';

import { useRouter } from 'next/navigation';

export default function MyLearnReviewsPage() {
  const router = useRouter();
  const { data } = useGetReviewsByMe();

  const reviewsList: ReviewsByMeItem[] = useMemo(
    () => data?.reviews ?? [],
    [data],
  );
  // console.log('data', reviewsList);

  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="pt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="나의 배움 내역 보기"
          content="배움 나누기 활동을 통해 얻은 배움 내역을 확인해보세요"
        />

        {reviewsList.map((item) => {
          return (
            <div
              onClick={() =>
                router.push(`/mypage/learn/reviews/detail?id=${item.id}`)
              }
            >
              <MyLearnListItem key={item.id} data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
