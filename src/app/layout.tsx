import './globals.css';

import wantedSans from '@/styles/font';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import Layout from '@/components/common-components/common/Layout';
import GlobalModal, {
  GlobalModalProvider,
} from '@/components/common-components/global-modal';

import Providers from './providers';

export const metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN),
  title: '또바',
  description: '또바는 또바',
};

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
