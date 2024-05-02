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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      {/* TOFIX: body 제거 필요 */}
      <body className={`${wantedSans.variable} font-wantedSans`}>
        <Providers>
          <GlobalModalProvider>
            <Header />
            {/* TOFIX: container 작업 필요 */}
            <div className="pt-[90px]">{children}</div>
            <Footer />
            <GlobalModal />
          </GlobalModalProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
