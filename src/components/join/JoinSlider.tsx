import 'swiper/css';

import React, { useState } from 'react';

import Image from 'next/image';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export type JoinSliderProps = {
  imgs: string[];
};

const JoinSlider = ({ imgs }: JoinSliderProps) => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  return (
    <div className="w-full h-[487px] cursor-pointer rounded-[20px] overflow-hidden">
      <Swiper
        id="joinSlider"
        slidesPerView={'auto'}
        navigation
        loop={true}
        centeredSlides={true}
        initialSlide={currentCard}
        onSlideChange={(swiper) => {
          setCurrentCard(swiper.snapIndex);
        }}
        style={{
          height: '100%',
        }}
      >
        {imgs?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={'item-centered w-full h-full overflow-hidden'}
            >
              <Image src={item} fill alt={index.toString()} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default JoinSlider;
