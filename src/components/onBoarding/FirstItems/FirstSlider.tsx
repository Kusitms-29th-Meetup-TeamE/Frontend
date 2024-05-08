import React from 'react';

import FirstChip from './FirstChip';

const FirstSlider = () => {
  const data = [
    { 활발한: '매주 한 번 테니스' },
    { 창의적인: '창의적인 사고 배우기' },
    { 평화로운: '요가 명상 클래스' },
    { 활발한: '아침 건강 등산' },
    { 자연친화적인: '자연의 맛 요리 배우기' },
    { 예술적인: '형형색색 크레파스' },
  ];

  return (
    <>
      <div className="absolute max-w-[1200px] w-full h-fit mt-[-200px] mx-auto flex gap-6">
        {data.map((item, idx) => (
          <FirstChip
            key={idx}
            chipLabel={Object.keys(item)[0]}
            content={Object.values(item)[0]}
          />
        ))}
      </div>
      <div className="h-24 absolute bg-gradient-to-r from-white to-transparent max-w-[478px] w-full left-[0%] mt-[-200px] mx-auto" />
      <div className="h-24 absolute bg-gradient-to-l from-white to-transparent max-w-[478px] w-full right-[0%] mt-[-200px] mx-auto" />
    </>
  );
};

export default FirstSlider;
