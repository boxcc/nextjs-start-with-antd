import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

// avoid CSS animation transition flashing
export const DISABLE_SSR_TRANSITION = `disable-SSR-transition`;

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="no-js">
        <Head>
          <meta charSet="UTF-8" />

          {/* <meta name="referrer" content="strict-origin-when-cross-origin" /> */}
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://img.studyinnewzealand.cn" />
          <link rel="preconnect" href="https://res.wx.qq.com" />
          <link
            rel="preload"
            as="image"
            href="https://img.studyinnewzealand.cn/home-bg-new.jpeg"
          />
          <link
            rel="preload"
            as="image"
            href="https://img.studyinnewzealand.cn/location-bg-new.jpeg"
          />
          <meta name="description" content="新西兰学习之旅，就地灵活启航" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
