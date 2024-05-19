'use client';

import MyPageTitle from '@/components/mypage/MypageTItle';
import ReviewItem, { ReviewItemProps } from '@/components/mypage/ReviewItem';
import Sidebar from '@/components/mypage/Sidebar';

import { useGetRecievedReviews } from '@/hooks/api/useMyPage';

export default function MyLearnRecieved() {
  const { data } = useGetRecievedReviews();
  //   console.log('받은리비', data);

  return (
    <div className="w-full m-auto max-w-[1200px] border border-black">
      <Sidebar />
      <div className="mt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6 border border-blue-500">
        <MyPageTitle
          title="나의 배움 내역 보기"
          content="배움 나누기 활동을 통해 얻은 배움 내역을 확인해보세요"
        />

        {data?.map((item: ReviewItemProps) => {
          return <ReviewItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}
