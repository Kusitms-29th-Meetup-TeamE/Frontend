'use client';

import React, { useEffect } from 'react';

import Spinner from '@/components/common-components/spinner';

import { useKakaoToken } from '@/hooks/api/useUser';

import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  let kakaoCode: string = '';

  if (typeof window !== 'undefined') {
    kakaoCode = new URL(window.location.href).searchParams.get('code') || '';
  }

  const { data, isLoading, error } = useKakaoToken(kakaoCode);

  useEffect(() => {
    if (isLoading) return; // 로딩 중일 때는 아무 작업도 하지 않음

    if (error) {
      console.error('Error fetching Kakao token:', error);
      // 에러 페이지로 리디렉션하거나 에러 메시지를 표시할 수 있음
      return;
    }

    if (data) {
      // 회원가입
      // sessionStorage.clear();
      // sessionStorage.setItem('name', data.name);
      // sessionStorage.setItem('email', data.email || '');
      // sessionStorage.setItem('birthyear', data.birthyear || '');
      // sessionStorage.setItem('gender', data.gender);
      // sessionStorage.setItem('imgUrl', data.profileImage || '');
      router.push('/signup/kakao');
    } else {
      // 로그인
      router.push('/');
    }
  }, [data, isLoading, error]);

  return isLoading ? (
    <div className="w-full h-full flex justify-center items-center my-auto border-2 border-red-500">
      <Spinner />
    </div>
  ) : (
    <></>
  );

  return null; // 로딩이 끝나면 실제 컴포넌트가 리디렉션 되므로 아무것도 렌더링하지 않음
};

export default Page;
