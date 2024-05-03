import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

import Image from 'next/image';

export type PointItemProps = {
  title: string;
  content: string;
  btnContent: string;
};

const PointItem = (props: PointItemProps) => {
  const { title, content, btnContent } = props;

  return (
    <div className="flex flex-row rounded-[20px] bg-white overflow-hidden">
      {/* <Image src="/assets/main/pointItem.svg" width={169} height={169} alt=""/> */}
      {/* 이미지 대체 div */}
      <div className="w-[169px] h-[169px] bg-gray-03"></div>
      <div className="w-[100%] flex flex-col gap-[21px] pt-[30px] pb-[36px] pr-[18px] pl-[18px]">
        <span className="text-black text-body2">{title}</span>
        <div className="w-[100%] mt-[21px] flex justify-between content-end">
          <div className="text-body3 text-gray-08">{content}</div>
          <button className="flex items-center gap-[3px] bg-gray-03 rounded-[20px] text-gray-08 text-chip-medium pt-[10px] pr-[14px] pb-[8px] pl-[14px]">
            {btnContent}
            <MdArrowForwardIos className="w-[16px] h-[16px] fill-gray-08" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointItem;
