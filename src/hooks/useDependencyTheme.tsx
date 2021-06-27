import { useContext } from 'react';
import { ThemeContext } from '@components/common/ThemeProvider/ThemeProvider';
import { IThemeContextType } from '@types';

const useDependencyTheme: () => IThemeContextType = () => {
  const { mode, changeMode } = useContext(ThemeContext);
  return { mode, changeMode };
};

export default useDependencyTheme;
