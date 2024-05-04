import { IoIosArrowForward } from 'react-icons/io';

import MainTitle from '@/components/main/MainTitle';
import ShareProfile from '@/components/main/ShareProfile';

const data = [
  {
    img: '/assets/main/main_banner.png',
    name: '김또바',
    age: 24,
    gender: '남',
    address: '청계동',
    content: '안녕하세요 저는 실뜨기할래요 푸항항항항항',
    type: '운동',
  },
  {
    img: '/assets/main/how1.png',
    name: '김또바',
    age: 24,
    gender: '남',
    address: '청계동',
    content: '안녕하세요 저는 실뜨기할래요 푸항항항항항',
    type: '운동',
  },
  {
    img: '/assets/main/main_banner.png',
    name: '김또바',
    age: 24,
    gender: '남',
    address: '청계동',
    content: '안녕하세요 저는 실뜨기할래요 푸항항항항항',
    type: '운동',
  },
  {
    img: '/assets/main/main_banner.png',
    name: '김또바',
    age: 24,
    gender: '남',
    address: '청계동',
    content: '안녕하세요 저는 실뜨기할래요 푸항항항항항',
    type: '운동',
  },
];

export default function ShareExperience() {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <MainTitle
        title="또바 추천 배움 나누기"
        subTitle="우리 동네 배움 선생님을 추천해드려요."
        className="mb-[50px]"
      />

      <div className="flex gap-4">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <ShareProfile
                name={item.name}
                age={item.age}
                gender={item.gender}
                message={item.content}
                location={item.address}
                imgUrl={item.img}
                type={item.type}
                className="bg-white transition-transform duration-300 ease-in-out transform-gpu hover:rounded-[20px] hover:p-[6px] hover:bg-white hover:shadow-[0_4px_30px_20px_rgba(0,0,0,0.08)]"
              />
            </div>
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
