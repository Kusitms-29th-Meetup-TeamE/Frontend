import React from 'react';

import RecommendItem from '@/components/main/RecommendItem';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export type ActivityType = {
  id?: string;
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
  const router = useRouter();
  const { data, className } = props;

  const handleItemClick = (id: string) => {
    router.push(`/join/detail/${id}`);
  };

  return (
    <div
      className={clsx(
        'grid grid-rows-3 grid-cols-4 gap-x-6 gap-y-[86px]',
        className,
      )}
    >
      {data.map((item, key) => (
        <Link
          href={{ pathname: `/join/detail/${item.id}` }}
          // as={'/join/detail'}
        >
          <RecommendItem
            key={key}
            title={item.title}
            location={item.location}
            time={item.time}
            img={item.imageUrl}
            isLiked={false}
            personalities={item.personalities}
            isHoverSet={false}
          />
        </Link>
      ))}
    </div>
  );
};

export default ActivityContainer;
