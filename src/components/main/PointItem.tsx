import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

import Image from 'next/image';

export type PointItemProps = {
  title: string;
  content: string;
  btnContent: string;
  img: string;
};

const variants = {
  container:
    'flex flex-row rounded-[20px] shadow-[0_4px_30px_10px_rgba(0,0,0,0.04)] bg-white overflow-hidden w-full',
  textContainer:
    'w-full flex flex-col gap-[21px] pt-[30px] pb-[36px] pr-[18px] pl-[18px]',
  title: 'text-black text-body2',
  contentContainer: 'w-[100%] mt-[21px] flex justify-between items-end',
  content: 'text-body3 text-gray-08 whitespace-pre-wrap',
  btn: 'flex items-center gap-[3px] bg-gray-03 rounded-[20px] text-gray-08 text-chip-medium pt-[10px] pr-[14px] pb-[8px] pl-[14px] hover:bg-gray-04',
  arrow: 'w-[16px] h-[16px] fill-gray-08',
};

const PointItem = (props: PointItemProps) => {
  const { title, content, btnContent, img } = props;

  return (
    <div className={variants.container}>
      {/* 이미지 대체 div */}
      <div className="w-[169px] h-full flex justify-center items-center">
        <Image
          src={`/assets/main/${img}.png`}
          width={200}
          height={140}
          alt=""
          className="object-cover h-[140px] w-[200px] pt-6 pl-4"
        />
      </div>
      <div className={variants.textContainer}>
        <span className={variants.title}>{title}</span>
        <div className={variants.contentContainer}>
          <div className={variants.content}>{content}</div>
          <button className={variants.btn}>
            {btnContent}
            <MdArrowForwardIos className={variants.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointItem;
