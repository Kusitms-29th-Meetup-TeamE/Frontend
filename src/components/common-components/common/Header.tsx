'use client';

import { CgProfile } from 'react-icons/cg';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { VscBell } from 'react-icons/vsc';

import { useNotifyLogin } from '@/hooks/useToast';

import Image from 'next/image';
import Link from 'next/link';

const variants = {
  menubar: 'w-1/2 max-w-[760px] flex text-gray-11 justify-between',
  centerMenu: 'text-h3 cursor-pointer',
  rightBar: 'flex items-center gap-[40px] text-gray-07 text-body3',
  rightMenu:
    'flex items-center text-gray-07 text-body3 hover:text-red-500 cursor-pointer',
};

export default function Header() {
  const accessToken =
    typeof window !== 'undefined' && sessionStorage.getItem('accessToken');

  return (
    <div className="w-full border border-b-gray-04 flex items-center fixed z-50 top-0 h-[70px] bg-white shadow-md">
      <div className="w-4/5 flex justify-between m-auto">
        {/* <div className="flex gap-[200px]"> */}
        <Link href="/">
          <div className="flex gap-[2px] items-center">
            <Image
              src="/assets/ddoba_logo.png"
              alt="logo"
              width={38}
              height={30}
              className="pr-[2px]"
            />
            <div className="text-body1 text-gray-11">또바</div>
          </div>
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
        {/* </div> */}

        {accessToken ? (
          <div className={variants.rightBar}>
            <div className={variants.rightMenu}>
              <VscBell width={20} height={20} />
              <span className="pl-[4px]">알림</span>
            </div>
            <Link href="#">
              <span className={variants.rightMenu}>
                <CgProfile width={20} height={20} />
                <span className="pl-[4px]">마이페이지</span>
              </span>
            </Link>
            <Link href="#">
              <span className={variants.rightMenu}>
                <HiOutlineCurrencyDollar />
                <span className="pl-[4px]">포인트</span>
              </span>
            </Link>
            <span className={variants.rightMenu}>로그아웃</span>
          </div>
        ) : (
          <div className={variants.rightBar}>
            <div className="flex gap-1">
              <Link href="/login">
                <span>로그인</span>
              </Link>

              <span>/</span>

              <Link href="/signup">
                <span>회원가입</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
