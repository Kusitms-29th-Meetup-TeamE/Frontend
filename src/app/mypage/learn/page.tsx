import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

import LearnProfile from '@/containers/mypage/LearnProfile';

export default function MyLearnPage() {
  return (
    <div className="w-full m-auto max-w-[1200px] border border-black">
      <Sidebar />
      <div className="mt-[60px] inline-flex flex-col gap-[30px] ml-[282px] pl-6 border border-blue-500">
        <MyPageTitle
          title="배움 프로필 수정하기"
          content="배움 나누기 활동을 통해 얻은 경험 내역을 확인해보세요"
        />
        <LearnProfile />
      </div>
    </div>
  );
}
