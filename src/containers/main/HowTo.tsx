'use client';

import { IoIosArrowForward } from 'react-icons/io';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HowTo() {
  const howData = [
    {
      title: '내가 하고 싶은 활동을 찾고 있다면',
      imgUrl: '/assets/main/how1.png',
      goToText: '활동 참여하기 바로가기',
      goToUrl: '경험 나누기 바로가기',
    },
    {
      title: '알찬 내 인생을 위해 배움을 찾고 있다면',
      imgUrl: '/assets/main/how2.png',
      goToText: '경험 나누기 바로가기',
      goToUrl: '경험 나누기 바로가기',
    },
    {
      title: '내 배움을 누군가에게 나누고 싶다면',
      imgUrl: '/assets/main/how3.png',
      goToText: '경험 나누기 바로가기',
      goToUrl: '경험 나누기 바로가기',
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full mx-auto max-w-[1435px] bg-white flex items-center justify-between rounded-full px-[140px] h-[300px] shadow-[0_4px_30px_10px_rgba(0,0,0,0.08)]">
      {howData.map((item, idx) => {
        return (
          <div
            key={idx}
            className="text-center flex flex-col justify-center items-center"
          >
            <div className="text-primary-orange6 text-body2">{item.title}</div>
            <Image src={item.imgUrl} alt="how-image" width={140} height={140} />
            <div
              className="bg-gray-03 flex items-center gap-[2px] rounded-[20px] px-5 py-[10px]"
              onClick={() => router.push(`${item.goToUrl}`)}
            >
              활동 참여하기 바로가기
              <IoIosArrowForward />
            </div>
          </div>
        );
      })}
    </div>
  );
}
