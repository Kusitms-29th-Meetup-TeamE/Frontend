import './globals.css';

import wantedSans from '@/styles/font';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import Layout from '@/components/common-components/common/Layout';
import GlobalModal, {
  GlobalModalProvider,
} from '@/components/common-components/global-modal';

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
            <Layout>{children}</Layout>
            <GlobalModal />
          </GlobalModalProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
