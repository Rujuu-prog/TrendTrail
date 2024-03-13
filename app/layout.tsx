import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { theme } from '../theme';
import { auth } from '@/auth';
import '@mantine/carousel/styles.css';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default async function RootLayout({ children }: { children: any }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
