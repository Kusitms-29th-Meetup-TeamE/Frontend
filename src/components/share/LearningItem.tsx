import React from 'react';

import { LearningType } from '@/types/activity';

import Chip from '../common-components/chip';

import Image from 'next/image';

const LearningItem = ({
  imageUrl,
  name,
  age,
  gender,
  location,
  message,
  title,
}: LearningType) => {
  return (
    <div className="max-w-[282px] w-full h-[452px] flex flex-col overflow-hidden rounded-[20px] cursor-pointer">
      <Image
        src={imageUrl}
        alt={''}
        width={282}
        height={282}
        className="w-[282px] h-[282px] bg-gray-03 rounded-[20px]"
      />
      <div className="flex gap-[10px] mt-2 items-center">
        <Chip type="요리" />
        <span className="text-primary-orange9 text-body2">{title}</span>
      </div>
      <div className="ml-[10px] mt-3 flex items-center">
        <span className="mr-[10px] text-footer-bold text-black">{name}</span>
        <p className="flex gap-3 text-gray-08 text-chip-medium">
          <span>{age}</span>
          <span>|</span>
          <span>{gender}</span>
          <span>|</span>
          <span>{location}</span>
        </p>
      </div>
      <div className="mt-[14px] w-full h-[80px] pt-3 pl-[19px] pr-[22px] pb-4 rounded-[20px] bg-gray-03 text-body3 text-black text-ellipsis">
        {message}
      </div>
    </div>
  );
};

export default LearningItem;
