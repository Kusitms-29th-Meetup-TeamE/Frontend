import React from 'react';

import MainTitle from '@/components/main/MainTitle';
import PointItem from '@/components/main/PointItem';

import Image from 'next/image';

const Point = () => {
  const PointData = {
    user: '또바기',
    point: '2,500',
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <MainTitle
        title="또바 포인트"
        subTitle="또바에서 적립금을 모으면 이를 현금으로 활용할 수 있어요"
        className="mb-[60px]"
      />
      <div className="mb-[53px] flex gap-[17px] justify-center">
        <Image
          src="/assets/main/point-left.svg"
          alt=""
          width={96}
          height={60}
          className="object-cover"
        />
        <div>
          <div className="text-footer-bold mb-[18px]">
            <span className="text-primary-orange6">{PointData.user}</span>
            <span className="text-gray-08">님의 또바 포인트!</span>
          </div>
          <div className="text-center bg-primary-orange5 text-white text-h2 pt-[3px] pb-[3px] pl-[29px] pr-[29px] rounded-[21px]">
            {PointData.point} 원
          </div>
        </div>
        <Image
          src="/assets/main/point-right.svg"
          alt=""
          width={96}
          height={60}
          className="object-cover"
        />
      </div>
      <div className="flex gap-[24px] w-full">
        <PointItem
          title={'또바 포인트를 더 받고 싶다면?'}
          content={
            '오늘의 미션을 확인해보세요.\n 미션을 달성하면 포인트를 드립니다.'
          }
          btnContent={'오늘의 미션 보러 가기'}
        />
        <PointItem
          title={'포인트를 사용하고 싶다면?'}
          content={'모은 포인트로 상점에서 \n다양한 상품을 구매 가능합니다.'}
          btnContent={'포인트 쓰러 가기'}
        />
      </div>
    </div>
  );
};

export default Point;
