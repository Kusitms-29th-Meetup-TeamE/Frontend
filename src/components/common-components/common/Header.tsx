'use client';

import { useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { VscBell } from 'react-icons/vsc';

import { useNotifyLater, useNotifyLogin } from '@/hooks/useToast';

import Image from 'next/image';
import Link from 'next/link';

const variants = {
  menubar: 'w-1/2 max-w-[760px] flex text-gray-11 justify-between',
  centerMenu: 'text-h3 cursor-pointer hover:text-primary-orange6',
  rightBar: 'flex items-center gap-[40px] text-gray-07 text-body3',
  rightMenu:
    'flex items-center text-gray-07 text-body3 hover:text-primary-orange6 cursor-pointer',
};

export default function Header({ isGuest }: { isGuest: boolean }) {
  const accessToken =
    typeof window !== 'undefined' && sessionStorage.getItem('accessToken');

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/';
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full flex items-center fixed z-50 top-0 h-[70px] bg-white">
      {isGuest ? (
        <Link href={'/'}>
          <Image
            className="absolute top-[40px] left-[80px]"
            src="/assets/ddoba_logo.png"
            alt=""
            width={86}
            height={29}
          />
        </Link>
      ) : (
        <div className="w-4/5 flex justify-between m-auto">
          <Link href="/">
            <Image
              src="/assets/ddoba_logo.png"
              alt="logo"
              width={86}
              height={29}
            />
          </Link>

          <div className={variants.menubar}>
            <Link
              href={accessToken ? '/join' : '#'}
              onClick={() => {
                if (!accessToken) useNotifyLogin();
              }}
            >
              <div className={variants.centerMenu}>활동 참여하기</div>
            </Link>
            <Link
              href={accessToken ? '/share' : '#'}
              onClick={() => {
                if (!accessToken) useNotifyLogin();
              }}
            >
              <div className={variants.centerMenu}>배움 나누기</div>
            </Link>

            <Link
              href={accessToken ? '/chat' : '#'}
              onClick={() => {
                if (!accessToken) useNotifyLogin();
              }}
            >
              <div className={variants.centerMenu}>함께 대화하기</div>
            </Link>
          </div>

          {accessToken ? (
            <div className={variants.rightBar}>
              <div
                className={variants.rightMenu}
                onClick={() => useNotifyLater()}
              >
                <VscBell width={20} height={20} />
                <span className="pl-[4px]">알림</span>
              </div>
              <Link href="/mypage/calendar">
                <span className={variants.rightMenu}>
                  <CgProfile width={20} height={20} />
                  <span className="pl-[4px]">마이페이지</span>
                </span>
              </Link>
              <Link href="/mypage/point">
                <span className={variants.rightMenu}>
                  <HiOutlineCurrencyDollar />
                  <span className="pl-[4px]">포인트</span>
                </span>
              </Link>
              <span onClick={handleLogout} className={variants.rightMenu}>
                로그아웃
              </span>
            </div>
          ) : (
            <div className={variants.rightBar}>
              <div className="flex gap-2">
                <Link href="/login">
                  <span className="hover:text-primary-orange6">로그인</span>
                </Link>

                <span>/</span>

                <Link href="/signup">
                  <span className="hover:text-primary-orange6">회원가입</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
