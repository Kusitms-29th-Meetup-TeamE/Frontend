import React from 'react';

import { ReviewItemType } from '@/types/learning';

import Image from 'next/image';

const ReviewItem = (props: ReviewItemType) => {
  const { title, content, name, date } = props;

  return (
    <div className="max-w-[384px] w-full h-[207px] flex flex-col relative rounded-[20px] bg-white px-8 pt-4 pb-6 whitespace-nowrap">
      <Image
        src={'/assets/share/slider-item.png'}
        alt={''}
        width={34}
        height={24}
      />
      <span className="text-primary-orange6 text-footer-bold mt-[10px]">
        {title}
      </span>
      <span className="text-gray-07 text-notification-chip-yes mt-[8px] text-ellipsis overflow-hidden">
        {content}
      </span>
      <div className="absolute bottom-6 right-8 flex gap-[10px] text-gray-05 text-notification-chip-no">
        <span>{name} 님</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ReviewItem;
