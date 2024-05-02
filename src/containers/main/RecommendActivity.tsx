import { IoIosArrowForward } from 'react-icons/io';

import MainTitle from '@/components/main/MainTitle';
import RecommendItem from '@/components/main/RecommendItem';

export default function RecommendActivity() {
  const data = [
    {
      title: '안녕하세요 타이틀이요',
      location: '서브타이틀인데요하하하하하',
      img: '/assets/main/main_banner.png',
      currentParticipants: 2,
      maxParticipants: 11,
      time: '4월 30일 화요일',
      isLiked: false,
      personalities: ['잔잔한'],
    },
    {
      title: '안녕하세요 타이틀이요',
      location: '서브타이틀인데요하하하하하',
      img: '/assets/main/main_banner.png',
      currentParticipants: 2,
      maxParticipants: 11,
      time: '2024.04.30',
      isLiked: false,
      personalities: ['잔잔한', '활발한'],
    },
    {
      title: '안녕하세요 타이틀이요',
      location: '서브타이틀인데요하하하하하',
      img: '/assets/main/main_banner.png',
      currentParticipants: 2,
      maxParticipants: 11,
      time: '2024.04.30',
      isLiked: false,
      personalities: ['잔잔한', '활발한'],
    },
  ];

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <MainTitle
        title="또바 추천 활동"
        subTitle="내가 선택한 성격을 바탕으로 나에게 맞는 활동을 추천드려요."
        className="mb-[50px]"
      />

      <div className="flex gap-6 justify-center border border-black">
        {data.map((item, idx) => {
          return (
            <RecommendItem
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
