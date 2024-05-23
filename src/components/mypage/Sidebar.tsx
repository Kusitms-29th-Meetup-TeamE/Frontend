'use client';

import { useEffect, useState } from 'react';

import { useGetMyPageInfo } from '@/hooks/api/useMyPage';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const sidebarStyle = {
  ul: 'text-body2 text-gray-09 w-full max-w-[282px] py-[18px] box-border text-center hover:bg-primary-orange1 hover:text-primary-orange6 hover:text-body4 cursor-pointer',
  liBox: 'pt-[14px] flex flex-col items-center gap-[26px] pb-[42px]',
  li: 'cursor-pointer text-gray-08 hover:text-primary-orange6 text-[16px] font-semibold leading-[22px]',
  fixed: 'fixed h-screen overflow-y-auto', // Fixed position with full height and scrollable
  selected: 'bg-primary-orange1 text-primary-orange6',
  selectedText: 'text-primary-orange6',
};

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [imgUrl, setImgUrl] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const { data } = useGetMyPageInfo();
  // console.log('data', data);

  useEffect(() => {
    if (data) {
      setImgUrl(data.imageUrl);
      setName(data.name);
      localStorage.setItem('name', data.name);
    }
  }, [data]);

  return (
    <aside className={`${sidebarStyle.fixed} bg-gray-01 w-full max-w-[282px]`}>
      <div className="flex flex-col items-center justify-center pt-[50px] px-[66px]">
        <Image
          src={imgUrl ?? '/assets/ddoba_profile.png'}
          width={150}
          height={150}
          alt=""
          className="border-2 border-primary-orange6 rounded-full object-cover w-[150px] h-[150px]"
        />
        <p className="my-[30px] text-notification-h1 text-primary-orange6">
          {name ?? '또바기'}
        </p>
      </div>

      {/* 메뉴 부분 */}
      <div>
        <ul
          onClick={() => router.push('/mypage/calendar')}
          className={clsx(
            sidebarStyle.ul,
            pathname.includes('calendar') && sidebarStyle.selected,
          )}
        >
          나의 일정 확인하기
        </ul>
        <ul
          onClick={() => router.push('/mypage/activity')}
          className={clsx(
            sidebarStyle.ul,
            pathname.includes('activity') && sidebarStyle.selected,
          )}
        >
          활동 참여 내역 보기
        </ul>
        <ul
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ul
            className={clsx(
              sidebarStyle.ul,
              pathname.includes('learn') && sidebarStyle.selected,
            )}
            onClick={() => router.push('/mypage/learn/profile')}
          >
            나의 배움 확인하기
          </ul>
          {(isHovered || isClicked || pathname.includes('learn')) && (
            <div className={sidebarStyle.liBox}>
              <li
                onClick={() => router.push('/mypage/learn/profile')}
                className={clsx(
                  sidebarStyle.li,
                  pathname.includes('/learn/profile') &&
                    sidebarStyle.selectedText,
                )}
              >
                배움 프로필 수정하기
              </li>
              <li
                onClick={() => router.push('/mypage/learn/recieved')}
                className={clsx(
                  sidebarStyle.li,
                  pathname.includes('/learn/recieved') &&
                    sidebarStyle.selectedText,
                )}
              >
                나의 후기 확인하기
              </li>
              <li
                className={clsx(
                  sidebarStyle.li,
                  pathname.includes('/learn/reviews') &&
                    sidebarStyle.selectedText,
                )}
                onClick={() => router.push('/mypage/learn/reviews')}
              >
                배움 나눔 내역 보기
              </li>
            </div>
          )}
        </ul>
        <ul
          className={clsx(
            sidebarStyle.ul,
            pathname.includes('point') && sidebarStyle.selected,
          )}
          onClick={() => router.push('/mypage/point')}
        >
          포인트 내역 보기
        </ul>
        <ul
          onClick={() => router.push('/mypage/edit')}
          className={clsx(
            sidebarStyle.ul,
            pathname.includes('edit') && sidebarStyle.selected,
          )}
        >
          기본정보 수정하기
        </ul>
      </div>
    </aside>
  );
}
