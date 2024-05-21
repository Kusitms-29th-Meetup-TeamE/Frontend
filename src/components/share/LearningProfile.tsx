'use client';

import React, { useEffect, useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

import { useMyLearningProfile } from '@/hooks/api/useLearning';
import { LearningProfileType } from '@/types/learning';

import Chip from '../common-components/chip';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LearningProfile = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const isMypage = pathname.includes('mypage');

  const [info, setInfo] = useState<LearningProfileType>();

  const { data: NotMypageData, isLoading, error } = useMyLearningProfile();

  useEffect(() => {
    console.log(pathname);
    console.log(isMypage);
    if (!isMypage) {
      setInfo(NotMypageData);
    }
  }, [NotMypageData]);

  return (
    <div
      className={clsx(
        'relative max-w-[282px] w-full h-fit px-4 py-5 rounded-[20px] bg-gray-02',
        className,
      )}
    >
      {isMypage ? (
        <Image
          src={'/assets/onboarding/check.png'}
          width={150}
          height={150}
          alt={''}
          className="rounded-full mx-auto mb-[22px] object-cover"
        />
      ) : (
        <Image
          src={info ? info.imageUrl : '/assets/onboarding/check.png'}
          width={227}
          height={227}
          alt={''}
          className="absolute top-[-8%] rounded-full object-cover"
        />
      )}
      <div
        className={clsx(
          'mb-[18px] flex items-center justify-between',
          isMypage ? '' : ' mt-[183px]',
        )}
      >
        <span className="ml-[13px] text-black text-footer-bold">
          {info && info.name}
        </span>
        <div className="w-fit h-fit rounded-[18.5px] flex gap-[10px] bg-white px-[14px] py-1 text-notification-chip-no text-gray-08">
          <span>{info && info.age} 세</span>
          <span>|</span>
          <span>{info && info.gender}</span>
          <span>|</span>
          <span>{info && info.location}</span>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {info &&
          info.experiences.map((item) => (
            <li className="flex items-center px-4 py-[13px] bg-white rounded-[20px] whitespace-nowrap">
              <Chip type={item.type} className="mr-[10px]" />
              <span className="text-body2 text-black">{item.message}</span>
            </li>
          ))}

        {isMypage ? (
          ''
        ) : (
          <button className="flex items-center px-4 py-[13px] bg-white rounded-[20px]">
            <FaCirclePlus className="ml-[6px] mr-4 text-gray-06 w-5 h-5" />
            <span className="text-notification-chip-yes text-gray-07">
              경험 프로필 등록
            </span>
          </button>
        )}
      </ul>
    </div>
  );
};

export default LearningProfile;
