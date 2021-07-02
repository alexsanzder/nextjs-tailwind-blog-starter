import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { AppContextProvider, initialAppState } from '@/context/AppContext';

import '@/styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const toggleMenu = (isMenuOpen: boolean): void => {
    setAppState({ ...appState, isMenuOpen });
    //console.log(appState);
  };
  const [appState, setAppState] = React.useState({
    ...initialAppState,
    toggleMenu,
  });

  return (
    <AppContextProvider value={appState}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContextProvider>
  );
};
export default MyApp;
