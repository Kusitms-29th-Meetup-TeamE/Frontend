'use client';

import { useEffect, useState } from 'react';

import { useGetMyPageInfo } from '@/hooks/api/useMyPage';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const sidebarStyle = {
  ul: 'text-body2 text-gray-09 w-full max-w-[282px] py-[18px] box-border text-center hover:bg-primary-orange1 hover:text-primary-orange6 hover:text-body4 cursor-pointer',
  liBox: 'pt-[14px] flex flex-col items-center gap-[26px] pb-[42px]',
  li: 'cursor-pointer text-gray-08 hover:text-primary-orange6 text-[16px] font-semibold leading-[22px]',
  fixed: 'fixed h-screen overflow-y-auto', // Fixed position with full height and scrollable
};

export default function Sidebar() {
  const router = useRouter();

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
    }
  }, [data]);

  return (
    <aside
      className={`${sidebarStyle.fixed} bg-gray-01 w-full max-w-[282px] border border-red-500`}
    >
      <div className="flex flex-col items-center justify-center pt-[50px] px-[66px]">
        <Image
          // src={'/assets/main/main_banner.png'}
          src={imgUrl}
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
        <ul className={sidebarStyle.ul}>나의 일정 확인하기</ul>
        <ul className={sidebarStyle.ul}>활동 참여 내역 보기</ul>
        <ul
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ul
            className={sidebarStyle.ul}
            onClick={() => router.push('/mypage/learn')}
          >
            나의 배움 확인하기
          </ul>
          {(isHovered || isClicked) && (
            <div className={sidebarStyle.liBox}>
              <li
                onClick={() => router.push('/mypage/learn/profile')}
                className={sidebarStyle.li}
              >
                배움 프로필 수정하기
              </li>
              <li
                onClick={() => router.push('/mypage/learn/recieved')}
                className={sidebarStyle.li}
              >
                나의 후기 확인하기
              </li>
              <li
                className={sidebarStyle.li}
                onClick={() => router.push('/mypage/learn/reviews')}
              >
                배움 나눔 내역 보기
              </li>
            </div>
          )}
        </ul>
        <ul className={sidebarStyle.ul}>포인트 내역 보기</ul>
        <ul
          onClick={() => router.push('/mypage/edit')}
          className={sidebarStyle.ul}
        >
          기본정보 수정하기
        </ul>
      </div>
    </aside>
  );
}
