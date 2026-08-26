import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hư Không Dị Giới Wiki · Terraria DST',
  description: 'Wiki kiểu Notion cho mod Hư Không Dị Giới, đồng bộ từ Alan Wiki và đối chiếu với dữ liệu mod DST.',
  openGraph: {
    title: 'Hư Không Dị Giới Wiki',
    description: 'Terraria · Don’t Starve Together',
    images: [{ url: '/og.png', width: 1672, height: 941 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hư Không Dị Giới Wiki',
    description: 'Terraria · Don’t Starve Together',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
