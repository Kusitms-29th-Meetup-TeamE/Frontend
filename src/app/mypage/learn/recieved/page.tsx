'use client';

import { useEffect, useState } from 'react';

import Chip from '@/components/common-components/chip';

import MyPageTitle from '@/components/mypage/MypageTItle';
import ReviewItem, { ReviewItemProps } from '@/components/mypage/ReviewItem';
import Sidebar from '@/components/mypage/Sidebar';

import { learningCategoryItems } from '@/constants/object';
import { useGetRecievedReviews } from '@/hooks/api/useMyPage';

export default function MyLearnRecieved() {
  const [selectedChip, setSelectedChip] = useState<string>('전체');

  const { data, refetch } = useGetRecievedReviews(
    selectedChip === '전체' ? '' : selectedChip,
  );
  //   console.log('받은리비', data);

  useEffect(() => {
    refetch();
  }, [selectedChip]);

  return (
    <div className="w-full m-auto max-w-[1200px]">
      <Sidebar />
      <div className="pt-[60px] flex flex-col gap-[30px] ml-[282px] pl-6">
        <MyPageTitle
          title="나의 후기 확인하기"
          content="배움 나누기 활동을 통해 얻은 후기를 확인해보세요"
        />
        <section className="flex gap-5">
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
        {data?.map((item: ReviewItemProps) => {
          return <ReviewItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}
