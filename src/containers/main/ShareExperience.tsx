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
  },
  {
    img: '/assets/main/main_banner.png',
    name: '김또바',
    age: 24,
    gender: '남',
    address: '청계동',
    content: '안녕하세요 저는 실뜨기할래요 푸항항항항항',
  },
  {
    img: '/assets/main/main_banner.png',
    name: '김또바',
    age: 24,
    gender: '남',
    address: '청계동',
    content: '안녕하세요 저는 실뜨기할래요 푸항항항항항',
  },
  {
    img: '/assets/main/main_banner.png',
    name: '김또바',
    age: 24,
    gender: '남',
    address: '청계동',
    content: '안녕하세요 저는 실뜨기할래요 푸항항항항항',
  },
];

export default function ShareExperience() {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <MainTitle
        title="또바 추천 경험 나누기"
        subTitle="우리 동네 선생님을 추천해드려요."
        className="mb-[50px]"
      />

      <div className="flex gap-6">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <ShareProfile
                name={item.name}
                age={item.age}
                gender={item.gender}
                content={item.content}
                address={item.address}
                img={item.img}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-[70px] w-full mx-auto max-w-[1200px] text-center text-body3 text-gray-10">
        <div className="inline-flex items-center gap-[2px] cursor-pointer">
          더 많은 활동 보기
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
