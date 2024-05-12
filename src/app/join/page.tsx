'use client';

import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa6';

import Input from '@/components/common-components/input';

import ActivityHeader from '@/components/join/ActivityHeader';

import ChipContainer from '@/containers/join/ChipContainer';

import clsx from 'clsx';

const page = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  useEffect(() => {
    console.log(selectedChips);
  }, [isLiked, selectedChips]);

  return (
    <>
      <ActivityHeader
        title={'활동 참여하기'}
        content={'취향에 맞는 활동을 찾고 참여하세요!'}
      />
      <div className="max-w-[1210px] w-full mx-auto border">
        <div className="mt-[60px] flex justify-between">
          <Input
            onChange={() => console.log('input 클릭')}
            placeholder={'찾으시는 활동을 검색해보세요!'}
            search={true}
            shape={'rounded'}
            size={'sm'}
          />
          <div
            className={clsx(
              'mb-6 flex items-center gap-[10px] px-[18px] py-[8px] rounded-[30px] text-body3 whitespace-nowrap cursor-pointer',
              isLiked
                ? 'bg-primary-orange6 text-white'
                : 'bg-gray-02 text-gray-09',
            )}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <FaHeart
              width={20}
              height={20}
              className={clsx(isLiked ? 'text-white' : 'text-primary-orange6')}
            />
            <span>관심활동 모아보기</span>
          </div>
        </div>
        {/* chip container */}
        <ChipContainer handleChange={setSelectedChips} />
      </div>
    </>
  );
};

export default page;
