import React from 'react';

import NoticeItem from '@/components/main/NoticeItem';

import { noticeData } from '@/constants/object';

const Notice = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto flex gap-[24px] justify-center">
      {noticeData &&
        noticeData.map((item, index) => {
          return <NoticeItem key={index} {...item} />;
        })}
    </div>
  );
};

export default Notice;
