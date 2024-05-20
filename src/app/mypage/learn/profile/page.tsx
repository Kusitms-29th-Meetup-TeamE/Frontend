'use client';

import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

import LearnProfile from '@/containers/mypage/LearnProfile';

export default function MyLearnProfilePage() {
  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="mt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="나의 배움 내역 보기"
          content="배움 나누기 활동을 통해 얻은 배움 내역을 확인해보세요"
        />
        <LearnProfile />
      </div>
    </div>
  );
}
