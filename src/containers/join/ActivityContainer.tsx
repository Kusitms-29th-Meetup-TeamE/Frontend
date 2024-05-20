import React from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export type ActivityContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const ActivityContainer = (props: ActivityContainerProps) => {
  const router = useRouter();
  const { className, children } = props;

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
      {children}
    </div>
  );
};

export default ActivityContainer;
