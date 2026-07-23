import type { Metadata } from 'next';
import { Public_Sans, Raleway } from 'next/font/google';

import './globals.css';
import { Toaster } from 'sonner';

import { cn } from '@/lib/utils';
import Providers from '@/providers/providers';

const ralewayHeading = Raleway({
  subsets: ['latin'],
  variable: '--font-heading',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Corevia',
  description: 'Where Customers and Supply Chains Connect.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'antialiased',
        'font-sans',
        publicSans.variable,
        ralewayHeading.variable
      )}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
