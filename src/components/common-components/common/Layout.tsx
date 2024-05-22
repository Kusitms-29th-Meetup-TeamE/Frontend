'use client';

import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

import { usePathname } from 'next/navigation';

function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const isGuest =
    pathname.includes('/login') ||
    pathname.includes('/signup') ||
    pathname.includes('/onboarding');

  const isMyPage = pathname.startsWith('/mypage');

  return (
    <>
      <Header isGuest={isGuest} />
      <div className={`${!isGuest && 'mt-[70px] mb-[160px]'}`}>{children}</div>
      {!isGuest && !isMyPage && <Footer />}
    </>
  );
}

export default Layout;
