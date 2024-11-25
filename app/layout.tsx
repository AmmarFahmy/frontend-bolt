import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Knowledge Management System',
  description: 'AI-powered knowledge management platform for teams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}