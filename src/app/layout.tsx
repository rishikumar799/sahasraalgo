import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';
import { Roboto, Oswald } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Sahasra Algo',
  description: 'AI-driven trading insights and automation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <body className={cn('font-body antialiased bg-black text-white')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
