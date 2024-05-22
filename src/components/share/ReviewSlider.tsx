import 'swiper/css';

import React, { useCallback, useRef, useState } from 'react';

import { ReviewSliderProps } from '@/types/learning';

import ReviewItem from './ReviewItem';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewSlider = (data: ReviewSliderProps) => {
  const [currentReview, setCurrentReview] = useState<number>(0);
  //   const swiperRef = useRef<SwiperRef>(null);
  const nextButtonRef = useRef(null);

  const handleNextClick = useCallback(() => {
    if (currentReview < data.reviewList.length) {
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
      className="relative cursor-pointer"
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
      {data.reviewList &&
        data.reviewList.map((item) =>
          item.reviews.map((item) => (
            <SwiperSlide className="w-fit">
              <ReviewItem
                title={item.title}
                content={item.content}
                name={item.name}
                date={item.date}
              />
            </SwiperSlide>
          )),
        )}
    </Swiper>
  );
};

export default ReviewSlider;
