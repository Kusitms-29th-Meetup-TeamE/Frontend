'use client';

import React, { useEffect, useState } from 'react';

import Chip from '@/components/common-components/chip';
import Pagination from '@/components/common-components/pagination';
import SelectBox from '@/components/common-components/select-box/SelectBox';

import ActivityBanner from '@/components/join/ActivityBanner';
import LearningItem from '@/components/share/LearningItem';
import LearningProfile from '@/components/share/LearningProfile';

import { learningCategoryItems, sortItems } from '@/constants/object';
import { useAllLearning } from '@/hooks/api/useLearning';
import { LearningType } from '@/types/learning';

import ActivityContainer from '@/containers/join/ActivityContainer';

import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedChip, setSelectedChip] = useState<string>('전체');

  const [selectDropbox, setSelectDropbox] = useState<string | number>('latest');
  const { data, isLoading, refetch } = useAllLearning({
    page: currentPage - 1,
    sort: (selectDropbox as string) || '',
    category: selectedChip,
  });

  useEffect(() => {
    refetch();
    setCurrentPage(1);
  }, [selectDropbox, selectedChip]);

  return (
    <>
      <ActivityBanner
        title={'배움 나누기'}
        content={'다른 사람으로부터 배우고 알려주며, 배움을 나눠보세요!'}
      />
      <div className="max-w-[1200px] w-full mx-auto pt-14 flex gap-6">
        <LearningProfile className="mt-[70px]" />
        <section className="w-full flex flex-col">
          <section className="w-full flex justify-between">
            <section className="h-9 flex gap-5 mb-[34px]">
              {learningCategoryItems.map((item, key) => (
                <Chip
                  text={item}
                  key={item}
                  size="md"
                  focusType="disabledLight"
                  initialChip={selectedChip}
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
            {data ? (
              data.experiences.map((item: LearningType, key: number) => {
                return (
                  <div onClick={() => router.push(`/share/detail/${item.id}`)}>
                    <LearningItem
                      key={key + item.name}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      age={item.age}
                      gender={item.gender}
                      location={item.location}
                      message={item.message}
                      title={item.title}
                      type={item.type}
                    />
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </ActivityContainer>
          {data ? (
            <Pagination
              totalPages={data && data.pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <></>
          )}
        </section>
      </div>
    </>
  );
};

export default page;
