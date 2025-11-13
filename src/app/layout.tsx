import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';
import { Open_Sans, Montserrat } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Sahasra Algo - Best Algo Trading Platform for Traders',
  description:
    'Unlock AI-powered trading with Sahasra Algo, the best platform for automated trading solutions. Get faster execution, smarter decisions, and better returns with our advanced algorithmic strategies.',
  keywords: [
    'Sahasra Algo',
    'sahasra',
    'best algo trading',
    'algo trading',
    'automated trading',
    'AI trading',
    'best algo trading platform',
    'quantitative trading',
    'trading bot',
    'stock market',
    'financial trading',
  ],
  openGraph: {
    title: 'Sahasra Algo - Best Algo Trading Platform for Traders',
    description:
      'AI-powered trading made easy: faster execution, smarter decisions, better returns.',
    url: 'https://sahasraalgo.com',
    siteName: 'Sahasra Algo',
    images: [
      {
        url: '/images/Sahasra2.png',
        width: 1200,
        height: 630,
        alt: 'Sahasra Algo Trading Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahasra Algo - Best Algo Trading Platform for Traders',
    description:
      'Unlock AI-powered trading with Sahasra Algo for faster execution, smarter decisions, and better returns.',
    images: ['/images/Sahasra2.png'],
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className={cn('font-body antialiased bg-black text-white')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
