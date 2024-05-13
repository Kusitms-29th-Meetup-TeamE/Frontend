import React from 'react';

import RecommendItem from '@/components/main/RecommendItem';

import clsx from 'clsx';

export type ActivityType = {
  title: string;
  location: string;
  time: string;
  imageUrl: string;
  isLiked: boolean;
  personalities: string[];
};

export type ActivityContainerProps = {
  data: ActivityType[];
  className?: string;
};

const ActivityContainer = (props: ActivityContainerProps) => {
  const { data, className } = props;

  return (
    <div
      className={clsx(
        'grid grid-rows-3 grid-cols-4 gap-x-6 gap-y-[86px]',
        className,
      )}
    >
      {data.map((item, key) => (
        <RecommendItem
          title={item.title}
          location={item.location}
          time={item.time}
          img={item.imageUrl}
          isLiked={false}
          personalities={item.personalities}
          isHoverSet={false}
        />
      ))}
    </div>
  );
};

export default ActivityContainer;
