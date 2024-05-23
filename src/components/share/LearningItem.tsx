'use client';

import { LearningType } from '@/types/learning';

import Chip from '../common-components/chip';

import clsx from 'clsx';
import Image from 'next/image';

const LearningItem = ({
  id,
  type,
  title,
  imageUrl,
  name,
  age,
  gender,
  location,
  message,
}: LearningType) => {
  return (
    <div className="max-w-[282px] w-full h-[452px] flex flex-col overflow-hidden rounded-[20px] cursor-pointer">
      <Image
        src={imageUrl ? imageUrl : '/assets/main/main_banner.png'}
        alt={''}
        width={282}
        height={282}
        className="w-[282px] h-[282px] rounded-[20px]"
      />
      <div className="flex gap-[10px] mt-2 items-center">
        <Chip type={type} />
        <span className="text-primary-orange9 text-body2">{title}</span>
      </div>
      <div className="ml-[10px] mt-3 flex items-center">
        <span className="mr-[10px] text-footer-bold text-black">{name}</span>
        <div className="flex gap-3 text-gray-08 text-chip-medium">
          <span>{age} 세</span>
          <span>|</span>
          <span>{gender}</span>
          <span>|</span>
          <span>{location}</span>
        </div>
      </div>
      <span
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
        className="overflow-hidden mt-[14px] w-full h-[80px] pt-3 pl-[19px] pr-[22px] pb-4 rounded-[20px] bg-gray-03 text-body3 text-black"
      >
        {message}
      </span>
    </div>
  );
};

export default LearningItem;
