import { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';

require(`@/styles/global.less`);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  );
}

export default MyApp;
