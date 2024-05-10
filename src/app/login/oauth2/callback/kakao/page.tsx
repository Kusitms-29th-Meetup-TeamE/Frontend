'use client';

import React, { useEffect, useState } from 'react';

import { getKakaoToken } from '@/api/login/kakaoLoginApi';
import { useQuery } from '@tanstack/react-query';

import { useRouter, usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<string>();

  let kakaoCode: string = '';

  if (typeof window !== 'undefined') {
    kakaoCode = new URL(window.location.href).searchParams.get('code') || '';
  }

  if (kakaoCode) {
    const { data } = useQuery({
      queryKey: ['KAKAO_CODE', kakaoCode],
      queryFn: () => getKakaoToken(kakaoCode),
    });

    useEffect(() => {
      setUserInfo(data);
    }, [data]);
  } else {
    router.replace('/login');
    throw new Error('code is invalid');
  }

  useEffect(() => {
    if (userInfo) {
      // localStorage.setItem('userId', userInfo.userId?.toString());
      // localStorage.setItem('nickname', userInfo.nickname);
      console.log(userInfo);
      router.replace('/');
    }
  }, [userInfo]);

  return <div></div>;
};

export default page;
