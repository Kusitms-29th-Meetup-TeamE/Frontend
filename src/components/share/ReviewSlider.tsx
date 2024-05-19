import 'swiper/css';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import ReviewItem from './ReviewItem';

import Image from 'next/image';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const data = [
  {
    id: 1,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 2,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 3,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 4,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 5,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 6,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
  {
    id: 7,
    title: '제목',
    content: '내용',
    writer: '작성자',
    writeDate: '날짜',
  },
];
const ReviewSlider = () => {
  const [currentReview, setCurrentReview] = useState<number>(0);
  //   const swiperRef = useRef<SwiperRef>(null);
  const nextButtonRef = useRef(null);

  const handleNextClick = useCallback(() => {
    if (currentReview < data.length) {
      setCurrentReview((prev) => prev + 3);
    }
    console.log(currentReview);
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
      {data.map((item) => {
        return (
          <SwiperSlide className="w-fit">
            <ReviewItem
              title={item.title}
              content={item.content}
              writer={item.writer}
              date={item.writeDate}
            />
            {item.id}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewSlider;
