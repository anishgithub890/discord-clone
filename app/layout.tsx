import { ClerkProvider } from '@clerk/nextjs';
import { Open_Sans } from 'next/font/google';
import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { ModalProvider } from '@/components/provider/modal-provider';

import './globals.css';
import { SocketProvider } from '@/components/provider/socket-provider';
import { QueryProvider } from '@/components/provider/query.provider';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discord Clone',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
