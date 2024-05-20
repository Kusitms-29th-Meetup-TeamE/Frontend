'use client';

import RecommendItem from '@/components/main/RecommendItem';
import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

import { useMyActivities } from '@/hooks/api/useMyPage';

export default function MyPageActivity() {
  const { data, isLoading } = useMyActivities();
  console.log('hihi', data);

  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="pt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="활동 참여 내역 보기"
          content="또바에서 참여했던 활동을 한눈에 확인할 수 있어요"
        />
        <div className="w-full grid grid-cols-3 gap-4 gap-y-20">
          {data?.map((item: any) => {
            return (
              <RecommendItem
                isLoading={isLoading}
                key={item.id}
                title={item.title}
                location={item.location}
                img={item.activityThumbnail}
                time={item.time}
                isLiked={item.liked}
                isHoverSet={false}
                personalities={item.personality}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
