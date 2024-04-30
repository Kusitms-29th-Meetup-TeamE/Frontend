import './globals.css';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import Footer from '@/components/common-components/common/Footer';
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
      <body className={`${wantedSans.variable} font-wantedSans`}>
        <Providers>
          <GlobalModalProvider>
            {/* footer 없는 화면에 대한 처리 필요*/}
            <div className="mb-[264px]">{children}</div>
            <Footer />
            <GlobalModal />
          </GlobalModalProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
