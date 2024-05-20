'use client';

import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';

import {
  usePostActivityLike,
  usePostActivityNotLike,
} from '@/hooks/api/useActivity';

import Chip from '../common-components/chip';
import Skeleton from '../common-components/skeleton';

import clsx from 'clsx';
import Image from 'next/image';

export type RecommendItemProps = {
  id?: number;
  title: string;
  location: string;
  maxParticipants?: number;
  currentParticipants?: number;
  time: string;
  img: string;
  isLiked: boolean;
  className?: string;
  personalities: string[];
  isLoading?: boolean;
  isHoverSet?: boolean;
};

export default function RecommendItem(props: RecommendItemProps) {
  const {
    id,
    title,
    personalities,
    location,
    maxParticipants,
    currentParticipants,
    time,
    img,
    isLiked,
    className,
    isLoading,
    isHoverSet = true,
  } = props;

  const [hover, setHover] = useState<boolean>(false);
  const [isItemLiked, setIsItemLiked] = useState<boolean>(isLiked);

  const { mutate: postMutate, isPending: postPending } = usePostActivityLike(
    id!,
  );
  const { mutate: cancelMutate, isPending: cancelPending } =
    usePostActivityNotLike(id!);

  return (
    <div
      className={clsx('w-full min-w-[282px]', className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isLoading ? (
        <Skeleton width={380} height={380} borderRadius={20} />
      ) : (
        <Image
          src={img ?? '/assets/main/main_banner.png'}
          height={380}
          width={380}
          alt=""
          className="cursor-pointer object-cover rounded-[20px] w-full h-[380px]"
        />
      )}

      <div className="mt-[14px]">
        <div className="flex items-center justify-between mb-[12px]">
          <div className="flex gap-2">
            {isLoading ? (
              <Skeleton count={1} height={32} width={200} borderRadius={20} />
            ) : (
              personalities.map((item, idx) => <Chip text={item} key={idx} />)
            )}
          </div>

          {isItemLiked ? (
            <FaHeart
              width={25}
              height={25}
              className="cursor-pointer text-primary-orange5 text-[24px] z-10"
              onClick={() => {
                cancelMutate();
                setIsItemLiked(false);
              }}
            />
          ) : (
            <FaRegHeart
              width={25}
              height={25}
              className="cursor-pointer text-primary-orange5 text-[24px] z-10"
              onClick={() => {
                postMutate();
                setIsItemLiked(true);
              }}
            />
          )}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-[9px]">
            <span className="text-gray-11 text-body2 cursor-pointer">
              {isLoading ? <Skeleton width={380} height={30} /> : title}
            </span>
            <span className="text-gray-07 text-h5">
              {isLoading ? <Skeleton width={380} height={30} /> : location}
            </span>
          </div>

          {isHoverSet && hover && (
            <div className="text-gray-11 text-h5">
              참여 인원: {currentParticipants}/{maxParticipants}
            </div>
          )}
        </div>

        <div className="inline-flex max-h-[35px] mt-[20px] bg-gray-chip rounded-[20px] px-5 py-[10px] items-center text-center">
          {isLoading ? <Skeleton width={100} height={15} /> : time}
        </div>
      </div>
    </div>
  );
}
