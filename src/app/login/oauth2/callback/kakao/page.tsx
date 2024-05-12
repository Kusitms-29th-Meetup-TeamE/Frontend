'use client';

import React, { useEffect, useState } from 'react';

import { UserInfoProps } from '@/types/user';

import { getKakaoToken } from '@/api/login/kakaoLoginApi';
import { useQuery } from '@tanstack/react-query';

import { useRouter, usePathname } from 'next/navigation';

const page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfoProps>();

  let kakaoCode: string = '';

  if (typeof window !== 'undefined') {
    kakaoCode = new URL(window.location.href).searchParams.get('code') || '';
  }

  if (kakaoCode) {
    // 인가 코드가 유효한 경우
    const { data, error } = useQuery({
      queryKey: ['KAKAO_CODE', kakaoCode],
      queryFn: () => getKakaoToken(kakaoCode),
    });

    useEffect(() => {
      // 회원가입 시 필요한 정보를 userInfo에 저장
      if (data && data[1]) {
        setUserInfo(data[1]);
      }
    }, [data]);

    useEffect(() => {
      if (userInfo) {
        // 처음 로그인하는 경우
        sessionStorage.setItem('name', userInfo.name);
        sessionStorage.setItem('nickname', userInfo.nickname || '');
        sessionStorage.setItem('birthYear', userInfo.birthYear || '');
        sessionStorage.setItem('gender', userInfo.gender);
        sessionStorage.setItem('profileImg', userInfo.imgUrl || '');
        console.log(userInfo);
        router.replace('/signup');
      } else {
        // 이미 가입되어있는 회원인 경우
        // 헤더에서 토큰 추출
        if (data && data[0]) {
          sessionStorage.setItem('token', data[0]);
          router.replace('/');
        }
      }
    }, [userInfo]);
  } else {
    // 인가 코드가 유효하지 않은 경우
    throw new Error('code is invalid');
  }

  return <div></div>;
};

export default page;
