import React, { useState, ReactElement, createContext, ReactNode, useEffect } from 'react';
import { IThemeContextType } from '@types';
import Theme, { LightMode, DarkMode, ThemeType } from '@constants/Theme';
import MODE from '@constants/mode';

interface IProviderProps {
  children: ReactNode;
  defaultMode: string;
}

export const ThemeContext = createContext<IThemeContextType>({});

function ThemeModeProvider({ children, defaultMode }: IProviderProps): ReactElement {
  const [mode, setMode] = useState(defaultMode);
  const themeStorageName = 'theme';

  useEffect(() => {
    const initMode = window.localStorage.getItem(themeStorageName) ?? MODE.LIGHT;
    setMode(initMode);
  }, []);

  const changeMode = () => {
    const newMode = mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
    window.localStorage.setItem(themeStorageName, `${newMode}`);
    setMode(newMode);
  };

  const newTheme: ThemeType = mode === MODE.LIGHT ? LightMode : DarkMode;

  Object.keys(newTheme).forEach((key): void => {
    Theme[key] = newTheme[key];
  });

  const bodyElem = document.querySelector('#root') as HTMLElement;
  if (bodyElem) bodyElem.style.background = Theme.HEADER_BACK;

  return <ThemeContext.Provider value={{ mode, changeMode }}>{children}</ThemeContext.Provider>;
}

export default ThemeModeProvider;
