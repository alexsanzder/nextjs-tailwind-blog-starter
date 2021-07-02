import * as React from 'react';

export type InitialStateType = {
  isMenuOpen: boolean;
  toggleMenu(arg1: boolean): void;
};

export const initialAppState: InitialStateType = {
  isMenuOpen: false,
  toggleMenu: (): void => {},
};

export const AppContext =
  React.createContext<InitialStateType>(initialAppState);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
