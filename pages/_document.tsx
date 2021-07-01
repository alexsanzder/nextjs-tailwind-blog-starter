import Document, { Head, Html, Main, NextScript } from 'next/document';
import { SITE_LANG } from '@/utils/constants';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={SITE_LANG}>
        <Head />
        <body className="dark:bg-black dark:text-white text-gray-900 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
