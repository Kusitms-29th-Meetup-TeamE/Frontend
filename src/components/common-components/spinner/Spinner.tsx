import React from 'react';
import { SyncLoader } from 'react-spinners';

import { clsx } from 'clsx';

export type SpinnerProps = {
  isLoading?: boolean;
  className?: string;
  color?: string;
  size?: number;
  message?: string;
  messageStyle?: string;
};

const Spinner = ({
  isLoading,
  className,
  color,
  size,
  message,
  messageStyle,
}: SpinnerProps) => {
  return (
    <div
      className={clsx(
        'w-full h-full flex flex-col gap-8 justify-center items-center m-auto',
        className,
      )}
    >
      <SyncLoader
        loading={isLoading && true}
        color={color || '#FF7715'}
        size={size || 20}
        speedMultiplier={0.7}
      />
      <div className={messageStyle || 'text-body-3'}>
        {message || '로딩 중입니다'}
      </div>
    </div>
  );
};

export default Spinner;
