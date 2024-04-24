import './globals.css';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import wantedSans from '@/utils/font';

import Providers from './providers';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${wantedSans.variable} font-wantedSans`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
