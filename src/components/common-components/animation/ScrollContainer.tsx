'use client';

import React from 'react';

import ScrollAnimation from './ScrollAnimation';

import clsx from 'clsx';

type PropsType = {
  children: React.ReactNode;
};

export const ScrollContainer = React.memo(({ children }: PropsType) => {
  const { ref, isInViewport } = ScrollAnimation();

  return (
    <>
      <div
        ref={ref}
        className={clsx(
          'flex justify-center opacity-0',
          isInViewport ? 'animate-[pageScroll_2s_forwards]' : '',
        )}
      >
        {children}
      </div>
    </>
  );
});
