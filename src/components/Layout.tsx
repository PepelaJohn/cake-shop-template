// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { webname } from '@/constants';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children}: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{webname} - Handmade pastries in the heart of Nairobi.</title>
        
        <meta name="description" content="Handmade pastries for every occasion" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.png" />
      </Head>
      {children}
    </div>
  );
};