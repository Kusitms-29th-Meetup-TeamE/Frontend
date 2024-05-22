'use client';

import React, { useEffect, useState } from 'react';

import Chip from '@/components/common-components/chip';
import Pagination from '@/components/common-components/pagination';
import { SelectItemType } from '@/components/common-components/select-box';
import SelectBox from '@/components/common-components/select-box/SelectBox';

import ActivityBanner from '@/components/join/ActivityBanner';
import LearningItem from '@/components/share/LearningItem';
import LearningProfile from '@/components/share/LearningProfile';

import { learningCategoryItems } from '@/constants/object';
import { LearningType } from '@/types/activity';

import ActivityContainer from '@/containers/join/ActivityContainer';

import Link from 'next/link';

const page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // TODO: API 연결 브랜치에서 작업 예정 (현재는 id 1, 2만 넣어놓음)
  const data: LearningType[] = [
    {
      //1
      id: '1',
      imageUrl: '/assets/main/main_banner.png',
      name: '김또바',
      age: 62,
      gender: '여',
      location: '불광동',
      message: '커피를 좋아하신다면 저와함께 어쩌고 내려봐요 어쩌고',

      title: '드립커피',
    },
    {
      //2
      id: '2',
      imageUrl: '/assets/main/main_banner.png',
      name: '김또바',
      age: 62,
      gender: '여',
      location: '불광동',
      message: '커피를 좋아하신다면 저와함께 어쩌고 내려봐요 어쩌고',

      title: '드립커피',
    },
    {
      //3
      imageUrl: '/assets/main/main_banner.png',
      name: '김또바',
      age: 62,
      gender: '여',
      location: '불광동',
      message: '커피를 좋아하신다면 저와함께 어쩌고 내려봐요 어쩌고',

      title: '드립커피',
    },
    {
      //4
      imageUrl: '/assets/main/main_banner.png',
      name: '김또바',
      age: 62,
      gender: '여',
      location: '불광동',
      message: '커피를 좋아하신다면 저와함께 어쩌고 내려봐요 어쩌고',

      title: '드립커피',
    },
    {
      //5
      imageUrl: '/assets/main/main_banner.png',
      name: '김또바',
      age: 62,
      gender: '여',
      location: '불광동',
      message: '커피를 좋아하신다면 저와함께 어쩌고 내려봐요 어쩌고',

      title: '드립커피',
    },
    {
      //6
      imageUrl: '/assets/main/main_banner.png',
      name: '김또바',
      age: 62,
      gender: '여',
      location: '불광동',
      message: '커피를 좋아하신다면 저와함께 어쩌고 내려봐요 어쩌고',

      title: '드립커피',
    },
  ];
  const [selectedChip, setSelectedChip] = useState<string>('전체');
  const sortItems: SelectItemType[] = [
    { id: 1, text: '최신순', value: '최신순' },
    { id: 2, text: '거리순', value: '거리순' },
    { id: 3, text: '후기순', value: '후기순' },
  ];
  const [selectDropbox, setSelectDropbox] = useState<string | number>();

  useEffect(() => {
    console.log(selectDropbox);
  }, [selectDropbox]);

  useEffect(() => {
    console.log(selectedChip);
  }, [selectedChip]);

  return (
    <>
      <ActivityBanner
        title={'배움 나누기'}
        content={'다른 사람으로부터 배우고 알려주며, 배움을 나눠보세요!'}
      />
      <div className="max-w-[1200px] w-full mx-auto pt-14 flex gap-6">
        <LearningProfile className="mt-[70px]" />
        <section className="flex flex-col">
          <section className="w-full flex justify-between">
            <section className="h-9 flex gap-5 mb-[34px]">
              {learningCategoryItems.map((item, key) => (
                <Chip
                  text={item}
                  key={item}
                  size="md"
                  initialChip={'전체'}
                  handleSelect={setSelectedChip}
                  isBtn={true}
                  isPersonality={false}
                />
              ))}
            </section>
            <SelectBox
              items={sortItems}
              size="xs"
              setParams={setSelectDropbox}
              className="!w-fit text-chip-semibold-sm"
            />
          </section>
          <ActivityContainer className="grid !grid-rows-2 !grid-cols-3 !gap-y-[60px] !mb-[146px]">
            {data.map((item, key) => {
              return (
                <Link href={{ pathname: `/share/detail/${item.id}` }}>
                  <LearningItem
                    key={key + item.name}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    age={item.age}
                    gender={item.gender}
                    location={item.location}
                    message={item.message}
                    title={item.title}
                  />
                </Link>
              );
            })}
          </ActivityContainer>
          <Pagination
            totalPages={8}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </div>
    </>
  );
};

export default page;
