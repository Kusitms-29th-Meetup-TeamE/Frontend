'use client';

import 'swiper/css';

import React, { useState } from 'react';

import Image from 'next/image';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export type SubBannerSliderProps = {
  imgs: string[];
};

const SubBannerSlider = (props: SubBannerSliderProps) => {
  const { imgs } = props;
  const [currentCard, setCurrentCard] = useState<number>(0);

  return (
    <div className="relative max-w-[1200px] w-full mx-auto h-[146px] flex justify-center overflow-hidden ">
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        centeredSlides={true}
        initialSlide={currentCard}
        onSlideChange={(swiper) => {
          setCurrentCard(swiper.snapIndex);
        }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'bg-gray-200 rounded-full',
          bulletActiveClass: 'bg-white',
        }}
        className="h-full cursor-pointer"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {imgs?.map((item, index) => {
          return (
            <SwiperSlide key={index} className={'item-centered'}>
              <Image src={item} fill alt="sub-banner" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute bottom-[22px] flex flex-col justify-end items-center w-full h-full">
        <div className="swiper-pagination w-[36px] h-[4px] rounded-full" />
      </div>
    </div>
  );
};

export default SubBannerSlider;
