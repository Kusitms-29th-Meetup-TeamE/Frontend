'use client';

import { IoIosArrowForward } from 'react-icons/io';

import { howData } from '@/constants/object';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HowTo() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[1200px] flex gap-6 mt-[-130px]">
      {howData &&
        howData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-white p-[44px] box-border rounded-[40px] opacity-95 h-[250px] w-full max-w-[384px] shadow-[0_4px_30px_10px_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out hover:bg-primary-orange1"
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
                <div className="flex items-center w-[36px] h-[36px] justify-center rounded-full bg-gray-chip cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-orange5 hover:text-white">
                  <IoIosArrowForward
                    onClick={() => router.push(`${item.goToUrl}`)}
                    color="#95989a hover:white"
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
