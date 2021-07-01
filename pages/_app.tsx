import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@/styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
