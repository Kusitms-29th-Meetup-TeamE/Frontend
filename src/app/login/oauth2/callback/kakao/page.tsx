'use client';

import React, { use, useEffect, useState } from 'react';

import { useKakaoToken } from '@/hooks/api/useUser';

import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  let kakaoCode: string = '';

  if (typeof window !== 'undefined') {
    kakaoCode = new URL(window.location.href).searchParams.get('code') || '';
  }

  const { data } = useKakaoToken(kakaoCode);
  console.log('회원가입 시 데이터: ', data);

  useEffect(() => {
    console.log('hi');
    console.log(data);
  }, []);

  useEffect(() => {
    if (data) {
      // 회원가입
      sessionStorage.clear();
      sessionStorage.setItem('name', data.name);
      sessionStorage.setItem('email', data.email || '');
      sessionStorage.setItem('birthyear', data.birthyear || '');
      sessionStorage.setItem('gender', data.gender);
      sessionStorage.setItem('imgUrl', data.profileImage || '');
      router.push('/signup/kakao');
    } else {
      // 로그인
      router.push('/');
    }
  }, [data]);

  return <div></div>;
};

export default page;
