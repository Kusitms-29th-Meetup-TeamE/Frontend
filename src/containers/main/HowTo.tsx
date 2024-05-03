'use client';

import { IoIosArrowForward } from 'react-icons/io';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HowTo() {
  const howData = [
    {
      title: '내가 하고 싶은 활동을 찾고 있다면',
      imgUrl: '/assets/main/how1.png',
      goToText: '활동 참여하기',
      goToUrl: '/',
    },
    {
      title: '알찬 내 인생을 위해 배움을 찾고 있다면',
      imgUrl: '/assets/main/how2.png',
      goToText: '경험 나누기',
      goToUrl: '/',
    },
    {
      title: '내 배움을 누군가에게 나누고 싶다면',
      imgUrl: '/assets/main/how3.png',
      goToText: '함께 대화하기',
      goToUrl: '/',
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full max-w-[1200px] flex gap-6 mt-[-130px]">
      {howData.map((item, idx) => {
        return (
          <div
            key={idx}
            className="bg-white p-[44px] box-border rounded-[40px] opacity-95 h-[250px] w-full max-w-[384px] shadow-[0_4px_30px_10px_rgba(0,0,0,0.08)]"
          >
            <div className="flex justify-between">
              <Image
                src={item.imgUrl}
                alt="how-image"
                width={240}
                height={240}
                className={clsx(
                  'mt-[-100px] ml-[-50px] object-cover',
                  idx === 2 ? 'mb-2.5' : '',
                )}
              />
              <div className="flex items-center w-[36px] h-[36px] justify-center rounded-full bg-gray-chip cursor-pointer">
                <IoIosArrowForward
                  onClick={() => router.push(`${item.goToUrl}`)}
                  color="#95989a"
                />
              </div>
            </div>

            <p className="text-body2 text-gray-08">{item.title}</p>
            <span className="text-primary-orange6 text-h2">
              {item.goToText}
            </span>
          </div>
        );
      })}
    </div>
  );
}
