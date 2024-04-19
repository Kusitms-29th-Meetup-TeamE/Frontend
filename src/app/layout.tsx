import './globals.css';

import React from 'react';

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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
