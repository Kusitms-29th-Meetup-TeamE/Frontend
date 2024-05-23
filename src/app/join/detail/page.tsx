'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { LuCalendarClock } from 'react-icons/lu';
import { MdKeyboardArrowLeft, MdOutlinePersonOutline } from 'react-icons/md';

import Button from '@/components/common-components/button';
import Textarea from '@/components/common-components/textarea';

import JoinActivityModal from '@/components/join/JoinActivityModal';
import JoinSlider from '@/components/join/JoinSlider';

import { useActivityDetail } from '@/hooks/api/useActivity';
import { usePostChatRoomsGroup } from '@/hooks/api/useChat';
import { DetailProps } from '@/types/activity';

import JoinDetail from './JoinDetail';

import { useRouter, useSearchParams } from 'next/navigation';

const variants = {
  prev: 'w-fit h-fit px-[5px] pr-[10px] py-[5px] flex gap-[5px] items-center text-body2 text-gray-08 mb-[14px] hover:bg-gray-02 border-box rounded-[10px]',
  headerBtn:
    'flex gap-2 justify-center items-center text-gray-08 text-body3 px-[14px] py-2 bg-gray-03 rounded-[30px]',
  info: 'w-full h-[70px] flex justify-between items-center px-[30px] rounded-[20px] mb-[50px] bg-primary-orange6 text-white text-body2',
  content:
    'bg-gray-02 rounded-[20px] px-6 py-[23px] whitespace-pre-wrap text-gray-10 text-body3 leading-[30px]',
};

const page = () => {
  return (
    <Suspense>
      <JoinDetail />
    </Suspense>
  );
};

export default page;
