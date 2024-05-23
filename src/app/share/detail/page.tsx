'use client';

import React, { Suspense, useEffect, useState } from 'react';

import ShareDetail from './ShareDetail';

const page = () => {
  return (
    <Suspense>
      <ShareDetail />
    </Suspense>
  );
};

export default page;
