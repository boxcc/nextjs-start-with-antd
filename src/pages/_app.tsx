import 'antd/dist/reset.css';
import '@/styles/vars.css';
import '@/styles/global.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { useCreation } from 'ahooks';
import ErrorBoundary from '@/components/ErrorBoundary';
import { StyleProvider } from '@ant-design/cssinjs';

// require('@/styles/globals.css');

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useCreation(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
    [],
  );

  // const avoidCssAnimationFlashing = () => {
  //   if (!isServer()) {
  //     document.getElementById('preventFlashOfUnstyledContent')?.remove();
  //   }
  // };

  // useEffect(() => {
  //   avoidCssAnimationFlashing();
  // }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <StyleProvider hashPriority="high">
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ErrorBoundary>
      </StyleProvider>
    </>
  );
}

export default MyApp;
