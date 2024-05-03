import React from 'react';

import NoticeItem from '@/components/main/NoticeItem';

import { title } from 'process';

const Notice = () => {
  const noticeData = [
    {
      img: '/assets/main/notice.png',
      title: '또바 공지사항',
      subTitle: '또바 사용에 필요한 공지사항을 알려드립니다.',
      content: [
        '[이벤트] 이벤트내용어쩌고',
        '[이벤트] 이벤트내용어쩌고',
        '[안내] 안내내용어쩌고',
        '[안내] 안내내용어쩌고',
      ],
    },
    {
      img: '/assets/main/faq.png',
      title: '자주 하는 질문',
      subTitle: '또바에게 자주 하시는 질문에 답해드립니다.',
      content: [
        'Q. 활동 참여 어케함?',
        'Q. 활동 참여 어케함?',
        'Q. 활동 참여 어케함?',
        'Q. 활동 참여 어케함?',
      ],
    },
  ];

  return (
    <div className="max-w-[1200px] w-full mx-auto flex gap-[24px] justify-center">
      {noticeData.map((item, index) => {
        return <NoticeItem key={index} {...item} />;
      })}
    </div>
  );
};

export default Notice;
