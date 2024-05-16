import React from 'react';

import clsx from 'clsx';

// 활동 참여하기, 배움 나누기에서 공통으로 사용 위함
export type ActivityBannerProps = {
  title: string;
  content: string;
  imgUrl?: string;
};
const ActivityBanner = (props: ActivityBannerProps) => {
  const { title, content, imgUrl } = props;
  const backgroundColor = imgUrl
    ? `url(${imgUrl})`
    : 'url(/assets/main/main_banner.png)';

  return (
    <div
      className={clsx(
        'w-full h-60 flex flex-col justify-center items-center border bg-center bg-cover',
      )}
      style={{ backgroundImage: backgroundColor }}
    >
      <div className="text-white text-h2 mb-4">{title}</div>
      <div className="text-gray-02 text-h3">{content}</div>
    </div>
  );
};

export default ActivityBanner;
