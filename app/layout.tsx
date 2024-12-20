import React from 'react';
import type { Metadata } from "next";

import "./globals.css";
import Navbar from '@/components/Navbar';
import { auth } from '@/app/lib/auth'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  const showNavbar = !!session
  return (
    <html lang="en">
      <body className='bg-gray-200'>
        {showNavbar ? <Navbar /> : null}
        {children}
      </body>
    </html>
  );
}
