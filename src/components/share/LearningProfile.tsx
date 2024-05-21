'use client';

import React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

import Chip from '../common-components/chip';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LearningProfile = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const isMypage = pathname.includes('mypage');

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
          src={'/assets/onboarding/check.png'}
          width={227}
          height={227}
          alt={''}
          className="absolute top-[-13%] rounded-full object-cover"
        />
      )}
      <div
        className={clsx(
          'mb-[18px] flex items-center justify-between',
          isMypage ? '' : ' mt-[179px]',
        )}
      >
        <span className="ml-[13px] text-black text-footer-bold">김복순</span>
        <div className="w-fit h-fit rounded-[18.5px] flex gap-[10px] bg-white px-[14px] py-1 text-notification-chip-no text-gray-08">
          <span>62세</span>
          <span>|</span>
          <span>남</span>
          <span>|</span>
          <span>불광동</span>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center px-4 py-[13px] bg-white rounded-[20px]">
          <Chip type="운동" className="mr-[10px]" />
          <span className="text-body2 text-black">탁구</span>
        </li>
        <li className="flex items-center px-4 py-[13px] bg-white rounded-[20px]">
          <Chip type="운동" className="mr-[10px]" />
          <span className="text-body2 text-black">탁구</span>
        </li>
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
