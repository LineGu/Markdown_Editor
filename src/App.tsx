import React, { ReactElement } from 'react';
import ThemeModeProvider from '@components/common/ThemeProvider/ThemeProvider';
import PostPage from './components/post/Page/index';
import './style.css';

interface IPageProps {
  mode: string;
}

function App({ mode = 'LightMode' }: IPageProps): ReactElement {
  return (
    <ThemeModeProvider defaultMode={mode}>
      <PostPage />
    </ThemeModeProvider>
  );
}

export default App;
