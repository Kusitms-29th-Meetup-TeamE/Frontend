import MyCalendar from '@/components/mypage/MyCalendar';
import MyPageTitle from '@/components/mypage/MypageTItle';
import Sidebar from '@/components/mypage/Sidebar';

export default function MyPageCalendar() {
  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="pt-[60px] inline-flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="나의 일정 확인하기"
          content="요거 바꿔야함 통해 얻은 경험 내역을 확인해보세요"
        />
        <MyCalendar />
      </div>
    </div>
  );
}
