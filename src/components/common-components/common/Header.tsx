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
    <div className="w-full border-primary-orange6 flex">
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
          <Link href="/login">
            <span className={variants.rightMenu}>로그인</span>
          </Link>

          <span className={variants.rightMenu}>/</span>
          <Link href="/sign-up">
            <span className={variants.rightMenu}>회원가입</span>
          </Link>
        </div>
      )}
    </div>
  );
}
