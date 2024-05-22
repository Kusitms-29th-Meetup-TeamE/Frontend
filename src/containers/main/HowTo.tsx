'use client';

import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { howData } from '@/constants/object';
import { useNotifyLogin } from '@/hooks/useToast';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HowTo() {
  const router = useRouter();
  const accessToken =
    typeof window !== 'undefined' && sessionStorage.getItem('accessToken');

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (url: string) => {
    if (accessToken) router.push(`${url} `);
    else useNotifyLogin();
  };

  return (
    <div className="w-full max-w-[1200px] flex gap-6 mt-[-130px]">
      {howData &&
        howData.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(item.goToUrl)}
              className="cursor-pointer bg-white p-[44px] box-border rounded-[40px] opacity-95 h-[250px] w-full max-w-[384px] shadow-[0_4px_30px_10px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:bg-primary-orange1"
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
                <div
                  className={clsx(
                    'flex items-center w-[36px] h-[36px] justify-center rounded-full bg-gray-chip cursor-pointer transition-all duration-300 ease-in-out',
                    isHovered && 'bg-primary-orange5 text-white',
                  )}
                >
                  <IoIosArrowForward
                    color={clsx(isHovered ? 'white' : '#95989a')}
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
