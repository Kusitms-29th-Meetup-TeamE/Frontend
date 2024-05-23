'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';

import JoinDetail from './JoinDetail';

const page = () => {
  return (
    <main>
      <Suspense>
        <JoinDetail />
      </Suspense>
    </main>
  );
};

export default page;
