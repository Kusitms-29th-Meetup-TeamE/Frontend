'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';

import JoinDetail from './JoinDetail';

const page = () => {
  return (
    <Suspense>
      <JoinDetail />
    </Suspense>
  );
};

export default page;
