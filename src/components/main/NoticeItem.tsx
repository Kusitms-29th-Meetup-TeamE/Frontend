import React from 'react';

import Image from 'next/image';

export type NoticeItemProps = {
  img: string;
  title: string;
  subTitle: string;
  content: string[];
};

const NoticeItem = (props: NoticeItemProps) => {
  const { img, title, subTitle, content } = props;
  return (
    <div className="w-full pt-[39px] pb-[41px] pl-[53px] pr-[53px] rounded-[20px] bg-gray-02 cursor-pointer">
      <div className="flex flex-row gap-[10px] text-gray-11 text-h2">
        <Image
          src={img}
          height={48}
          width={48}
          alt=""
          className="object-cover"
        />
        {title}
      </div>
      <div className="mt-[12px] text-h5 text-gray-09">{subTitle}</div>
      <div className="mt-[50px]">
        {content &&
          content.map((item, index) => {
            return (
              <>
                <div className="mt-[34px] text-h5 text-gray-09">{item}</div>
                <div className="mt-[14px] h-[1px] bg-gray-05"></div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default NoticeItem;
