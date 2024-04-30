'use client';

import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';

import Tag from '../common-components/tag';

import clsx from 'clsx';

export type RecommendItemProps = {
  title: string;
  subTitle: string;
  totalNum: number;
  joinNum: number;
  date: string;
  img: string;
  likeStatus: boolean; // TODO: 백엔드랑 논의 필요
  className?: string;
};

export default function RecommendItem(props: RecommendItemProps) {
  const {
    title,
    subTitle,
    totalNum,
    joinNum,
    date,
    img,
    likeStatus,
    className,
  } = props;

  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        'border border-blue-500 cursor-pointer w-full min-w-[282px]',
        className,
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="rounded-[20px] w-full h-[380px] border border-red-500">
        {img}
      </div>
      <div className="mt-[14px]">
        <div className="flex items-center justify-between mb-[12px] border border-green-500">
          <Tag color="orange" text="잔잔한" />
          {likeStatus ? (
            <FaHeart width={25} height={25} />
          ) : (
            <FaRegHeart width={25} height={25} />
          )}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-[9px]">
            <span className="text-gray-11 text-body2">{title}</span>
            <span className="text-gray-07 text-h5">{subTitle}</span>
          </div>

          {hover && (
            <div className="text-gray-11 text-h5">
              참여 인원: {joinNum}/{totalNum}
            </div>
          )}
        </div>

        <div className="inline-flex max-h-[35px] mt-[20px] bg-gray-chip rounded-[20px] px-5 py-[10px] items-center text-center">
          {date}
        </div>
      </div>
    </div>
  );
}
