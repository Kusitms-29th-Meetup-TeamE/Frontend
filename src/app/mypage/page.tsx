'use client';

import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

// 나의 일정 확인하기가 마이페이지 첫 페이지임
export default function MyPage() {
  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="mt-[60px] inline-flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="나의 일정 확인하기"
          content="요거 바꿔야함 통해 얻은 경험 내역을 확인해보세요"
        />
      </div>
    </div>
  );
}
