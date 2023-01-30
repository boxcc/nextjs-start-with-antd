import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-test="extract"
            dangerouslySetInnerHTML={{ __html: extractStyle(cache) }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="zh-cmn-Hans">
        <Head>
          <meta charSet="UTF-8" />
          {/* <meta name="referrer" content="strict-origin-when-cross-origin" /> */}
          <link rel="icon" href="/favicon.png" />
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
