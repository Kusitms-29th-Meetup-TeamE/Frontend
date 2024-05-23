'use client';

import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';
import LearningProfile from '@/components/share/LearningProfile';

import LearnProfile from '@/containers/mypage/LearnProfile';

export default function MyLearnPage() {
  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="mt-[60px] inline-flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="배움 프로필 수정하기"
          content="배움 나누기 활동을 통해 얻은 경험 내역을 확인해보세요"
        />
        <div className="w-full h-full flex flex-row gap-6">
          <LearningProfile />
          <LearnProfile />
        </div>
      </div>
    </div>
  );
}
