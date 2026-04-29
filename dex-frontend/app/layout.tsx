'use client';

import '@/components/index.css';
import '@mantine/core/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { ColorSchemeScript, Flex, mantineHtmlProps, MantineProvider } from '@mantine/core';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/navbar';
import { config } from '../config';
import { theme } from '../theme';

export default function RootLayout({ children }: { children: any }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <Flex direction="column" bg="#161616" w="100vw">
                <Navbar />
                {children}
                <Footer />
              </Flex>
            </QueryClientProvider>
          </WagmiProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
