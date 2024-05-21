import React from 'react';

import { ActivityContainerProps } from '@/types/activity';

import clsx from 'clsx';

const ActivityContainer = (props: ActivityContainerProps) => {
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
