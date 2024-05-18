import React from 'react';

import Chip from '../common-components/chip';

import Image from 'next/image';

const LearningItem = () => {
  return (
    <div className="max-w-[282px] w-full h-[452px] flex flex-col overflow-hidden rounded-[20px] border">
      <Image
        src={''}
        alt={''}
        width={282}
        height={282}
        className="bg-gray-03 rounded-[20px]"
      />
      <p className="flex gap-[10px] mt-2 items-center">
        <Chip text="요리" />
        <span className="text-primary-orange9 text-body2">드립커피</span>
      </p>
      <p className="ml-[10px] mt-3 flex items-center">
        <span className="mr-[10px] text-footer-bold text-black">김또바</span>
        <div className="flex gap-3 text-gray-08 text-chip-medium">
          <span>62세</span>
          <span>|</span>
          <span>여</span>
          <span>|</span>
          <span>불광동</span>
        </div>
      </p>
      <div className="mt-[14px] w-full h-[80px] pt-3 pl-[19px] pr-[22px] pb-4 rounded-[20px] bg-[#d9d9d9] text-body3 text-black">
        커피를좋아한다면어쩌고저쩌고
      </div>
    </div>
  );
};

export default LearningItem;
