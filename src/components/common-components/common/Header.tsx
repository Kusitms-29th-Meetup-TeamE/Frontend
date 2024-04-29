'use client';

import { CgProfile } from 'react-icons/cg';
import { VscBell } from 'react-icons/vsc';

import { useNotifyLogin } from '@/hooks/useToast';

import Link from 'next/link';

const variants = {
  menubar: 'flex border border-red-500 gap-[240px]',
  centerMenu: 'hover:gray text-h2 cursor-pointer',
  rightbar: 'flex gap-[60px] border border-red-500',
  rightMenu: 'text-gray-07 text-h4',
};

export default function Header() {
  const accessToken =
    typeof window !== 'undefined' && sessionStorage.getItem('accessToken');

  return (
    <div className="w-full border border-black flex fixed z-50 top-0 m-auto h-[50px]">
      <div className="flex max-w-[1600px]">
        <Link href="/">
          <div>logo</div>
        </Link>
        <div className={variants.menubar}>
          <Link href="#">
            <div className={variants.centerMenu}>활동 참여하기</div>
          </Link>
          <Link href="#">
            <div className={variants.centerMenu}>경험 나누기</div>
          </Link>

          <Link
            href={accessToken ? '#' : '#'}
            onClick={() => {
              if (!accessToken) useNotifyLogin();
            }}
          >
            <div className={variants.centerMenu}>함께 대화하기</div>
          </Link>
        </div>

        {accessToken ? (
          <div className={variants.rightbar}>
            <span className={variants.rightMenu}>
              <VscBell />
              알림
            </span>
            <Link href="#">
              <span className={variants.rightMenu}>
                <CgProfile />
                마이페이지
              </span>
            </Link>
            <span className={variants.rightMenu}>로그아웃</span>
          </div>
        ) : (
          <div className={variants.rightbar}>
            <div>
              <Link href="/login">
                <span>로그인</span>
              </Link>

              <span>/</span>

              <Link href="/sign-up">
                <span>회원가입</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
