'use client';

import { Suspense, useRef, useState } from 'react';

import MyLearnReviewsDetailPage from './ReviewDetail';

export default function page() {
  return (
    <Suspense>
      <MyLearnReviewsDetailPage />
    </Suspense>
  );
}
