'use client';

import React, { useEffect, useState } from 'react';

import { useKakaoToken } from '@/hooks/useUser';
import { KakaoUserProps } from '@/types/user';

import { getKakaoToken } from '@/api/login/kakaoLoginApi';
import { useQuery } from '@tanstack/react-query';

import { useRouter, usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const router = useRouter();

  let kakaoCode: string = '';

  if (typeof window !== 'undefined') {
    kakaoCode = new URL(window.location.href).searchParams.get('code') || '';
  }

  if (kakaoCode) {
    // 인가 코드가 유효한 경우
    const { data } = useKakaoToken(kakaoCode);

    useEffect(() => {
      if (data) {
        // 회원가입
        sessionStorage.clear();
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('email', data.email || '');
        sessionStorage.setItem('birthyear', data.birthyear || '');
        sessionStorage.setItem('gender', data.gender);
        sessionStorage.setItem('profileImage', data.profileImage || '');
        router.push('/signup');
      } else {
        // 로그인
        router.push('/');
      }
    }, [data]);
  } else {
    // 인가 코드가 유효하지 않은 경우
    throw new Error('code is invalid');
  }

  return <div></div>;
};

export default page;
