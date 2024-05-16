'use client';

import './globals.css';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import Footer from '@/components/common-components/common/Footer';
import Header from '@/components/common-components/common/Header';
import GlobalModal, {
  GlobalModalProvider,
} from '@/components/common-components/global-modal';

import wantedSans from '@/utils/font';

import Providers from './providers';

import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isGuest =
    pathname.includes('/login') ||
    pathname.includes('/signup') ||
    pathname.includes('/onboarding');

  const isMyPage = pathname.startsWith('/mypage');

  return (
    <html>
      {/* TOFIX: body 제거 필요 */}
      <body className={`${wantedSans.variable} font-wantedSans`}>
        <Providers>
          <GlobalModalProvider>
            <Header isGuest={isGuest} />
            <div className={`${!isGuest && 'mt-[70px] mb-[160px]'}`}>
              {children}
            </div>
            {!isGuest && !isMyPage && <Footer />}
            <GlobalModal />
          </GlobalModalProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
