'use client';

import React from 'react';

import Chip from '@/components/common-components/chip';
import Input from '@/components/common-components/input';

import ActivityHeader from '@/components/join/ActivityHeader';
import PointItem from '@/components/main/PointItem';

import Notice from '@/containers/main/Notice';
import Point from '@/containers/main/Point';
import SubBannerSlider from '@/containers/main/SubBannerSlider';

const TestPage = () => {
  return (
    <div className="p-5">
      <ActivityHeader
        title={'활동 참여하기'}
        content={'취향에 맞는 활동을 찾고 참여하세요!'}
      />
      <Input
        onChange={() => console.log('input 클릭')}
        placeholder={'찾으시는 활동을 검색해보세요!'}
        search={true}
        shape={'rounded'}
        size={'sm'}
      />
      <Chip text="활발한" />
      <Chip
        text="전체"
        size="md"
        isBtn={true}
        isSelected={false}
        isPersonality={false}
      />
      <Chip
        text="전체"
        size="md"
        isBtn={true}
        isSelected={true}
        isPersonality={false}
      />
      <Chip text="활발한" size="md" isBtn={true} isSelected={false} />
      <Chip text="활발한" size="md" isBtn={true} isSelected={true} />

      <div className="flex gap-2 p-2"></div>
      <Notice />
      <div className="h-[30px]"></div>
      <SubBannerSlider
        imgs={[
          '/assets/main/subBanner1.svg',
          '/assets/main/subBanner1.svg',
          '/assets/main/subBanner1.svg',
        ]}
      />
      <div className="h-[30px]"></div>
      <Point />
    </div>
  );
};

export default TestPage;
