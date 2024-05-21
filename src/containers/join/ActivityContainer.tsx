import React from 'react';

import RecommendItem from '@/components/main/RecommendItem';

import { ActivityContainerProps } from '@/types/activity';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';

const ActivityContainer = (props: ActivityContainerProps) => {
  const router = useRouter();
  const { className, children } = props;

  return (
    <div
      className={clsx(
        'grid grid-rows-3 grid-cols-4 gap-x-6 gap-y-[86px]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ActivityContainer;
