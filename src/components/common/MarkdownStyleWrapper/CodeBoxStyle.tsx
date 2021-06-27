import React, { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import useDependencyTheme from '@hooks/useDependencyTheme';
import { atelierCaveLight, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Theme from '@constants/Theme';
import MODE from '@constants/mode';

interface ICodeBoxProps {
  value: string;
  language: string;
  className: string;
}

const CodeBox = ({ value = '', language = '' }: ICodeBoxProps): ReactElement => {
  const { mode } = useDependencyTheme();

  const codeBoxThemeStyle = mode === MODE.LIGHT ? atelierCaveLight : a11yDark;
  const codeBoxCustomStyle = {
    lineHeight: '1.4em',
    fontSize: '1.2em',
    borderRadius: '0.5em',
    backgroundColor: Theme.CODE_BOX,
  };

  return (
    <SyntaxHighlighter language={language} style={codeBoxThemeStyle} customStyle={codeBoxCustomStyle}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBox;
