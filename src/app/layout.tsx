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
            {children}
            <Footer />
            <GlobalModal />
          </GlobalModalProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
