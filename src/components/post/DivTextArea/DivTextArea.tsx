import React, { useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import CodeMirror, { EditorFromTextArea } from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import Theme from '@constants/Theme';
import { SetStateString, IOnDragEventFunc } from '@types';

const MarkdownEditorBlock = styled.div`
  .CodeMirror {
    height: 60vh;
    font-size: 1.125rem;
    line-height: 1.5;
    pointer-events: all;
    padding-left: 3vw;
    background-color: ${() => Theme.HEADER_BACK};
    color: ${() => Theme.INTRO};
    font-family: 'Fira Mono', monospace;
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', */
    .cm-header {
      line-height: 2;
    }
    .cm-header-1 {
      font-size: 2.5rem;
    }
    .cm-header-2 {
      font-size: 2rem;
    }
    .cm-header-3 {
      font-size: 1.5rem;
    }
    .cm-header-4,
    .cm-header-5,
    .cm-header-6 {
      font-size: 1.3125rem;
    }
    .cm-strong,
    .cm-em {
    }
    .CodeMirror-placeholder {
      font-style: italic;
    }
    @media (max-width: ${() => Theme.TABLET}) {
      width: 100%;
      border: none;
    }

    &::selection {
      background-color: ${() => Theme.TEXT_SELECT};
    }
    @media (max-width: ${() => Theme.MOBILE}) {
      width: 91%;
      height: 65vh;
      padding: 1.2em 0 0 1.2em;
      font-size: 1rem;
    }
  }
`;

export interface MarkdownEditorProps {
  className?: string;
  placeholder: string;
  input: string;
  setInput: SetStateString;
  refElem: React.RefObject<HTMLTextAreaElement>;
  onDrop: IOnDragEventFunc;
  cm: React.MutableRefObject<EditorFromTextArea | null>;
}

const detectJSDOM = () => {
  if (typeof navigator === 'undefined') return false;
  return navigator.userAgent.includes('jsdom');
};

function DivTextArea(props: MarkdownEditorProps): ReactElement {
  const { className, placeholder, input, setInput, refElem, onDrop, cm } = props;

  const initCodeMirror = () => {
    if (!refElem.current) return;
    if (detectJSDOM()) return;

    cm.current = CodeMirror.fromTextArea(refElem.current, {
      mode: 'markdown',
      theme: 'one-light',
      placeholder,
      lineWrapping: true,
    });
    cm.current.setValue(input);
    cm.current.on('change', (code) => {
      const updatedInput = code.getValue();
      setInput(updatedInput);
    });
    cm.current.on('drop', (_, event) => onDrop(event));
  };
  useEffect(() => {
    initCodeMirror();
    return (): void => cm.current?.toTextArea();
  }, []);

  return (
    <MarkdownEditorBlock className={className}>
      <textarea ref={refElem} style={{ border: 'none', display: 'none' }} />
    </MarkdownEditorBlock>
  );
}

export default DivTextArea;
