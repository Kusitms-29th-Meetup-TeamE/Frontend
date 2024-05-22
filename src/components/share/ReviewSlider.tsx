import 'swiper/css';

import React, { useCallback, useRef, useState } from 'react';

import { reviewData } from '@/constants/object';

import ReviewItem from './ReviewItem';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewSlider = () => {
  const [currentReview, setCurrentReview] = useState<number>(0);
  //   const swiperRef = useRef<SwiperRef>(null);
  const nextButtonRef = useRef(null);

  const handleNextClick = useCallback(() => {
    if (currentReview < reviewData.length) {
      setCurrentReview((prev) => prev + 3);
    }
    // console.log(currentReview);
  }, [currentReview]);

  //   useEffect(() => {
  //     if (swiperRef.current) {
  //       swiperRef.current.i
  //     }
  //   }, [currentReview, swiperRef]);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={24}
      navigation={{
        nextEl: nextButtonRef.current,
      }}
      loop={false}
      initialSlide={currentReview}
      onSlideChange={(swiper) => {
        setCurrentReview(swiper.snapIndex);
      }}
      className="relative"
      //   ref={swiperRef}
    >
      <Image
        alt={''}
        src="/assets/share/slider-next.png"
        width={45}
        height={45}
        id="nextReview"
        className="absolute right-[47px] top-1/3 z-10 cursor-pointer"
        onClick={handleNextClick}
        ref={nextButtonRef}
      />
      {reviewData &&
        reviewData.map((item) => {
          return (
            <SwiperSlide className="w-fit">
              <ReviewItem
                title={item.title}
                content={item.content}
                writer={item.writer}
                date={item.writeDate}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ReviewSlider;
