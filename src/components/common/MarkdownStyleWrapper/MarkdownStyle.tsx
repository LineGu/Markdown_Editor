import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { IComponentProps } from '@types';

const MarkdownStyleWrapper = styled.div`
  & > * {
    height: 79vh;
    font-size: 1.125rem;
    outline: none;
    pointer-events: auto;
    color: ${() => Theme.INTRO};
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow-wrap: break-word;

    h1 {
      padding-bottom: 1rem;
      margin-bottom: 4rem;
      border-bottom: 1px solid ${() => Theme.LINK_MODAL};
      font-size: 2.5em;
      font-weight: 800;
    }
    h2 {
      margin-bottom: 1rem;
      line-height: 1.5;
      font-size: 2rem;
      font-weight: bold;
    }
    h3 {
      margin-bottom: 1rem;
      line-height: 1.5;
      font-size: 1.5rem;
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
    table {
      border-collapse: collapse;
      font-size: 1rem;
      & th {
        border: 1px solid ${() => Theme.BASE};
        border-bottom: 2px solid ${() => Theme.INTRO};
        padding: 0.8rem 1.4rem;
      }
      & td {
        border: 1px solid ${() => Theme.BASE};
        border-top: none;
        padding: 0.8rem;
      }
    }
    a {
      color: ${() => Theme.MODE_MARK};
      text-decoration: none;
    }
    blockquote {
      margin: 0;
      padding: 0.2em;
      padding-left: 3em;
      line-height: 2rem;
      border-left: 0.4em ${() => Theme.POINT} solid;
      background-color: ${() => Theme.QUOTE_BOX};
    }
    hr {
      width: 100%;
      margin: 2rem 0;
      color: ${() => Theme.BASE};
      opacity: 60%;
    }
    p > code {
      font-size: 1.3rem;
      font-weight: 800;
      color: ${() => Theme.CODE};
      background-color: ${() => Theme.EMPHASIS};
      border-radius: 0.3em;
      padding: 0.15rem 0.5rem;
      margin: 0 0.2rem 0 0.5rem;
    }
    img {
      width: 25em;
      height: 15em;
    }
    & > *::selection {
      background-color: inherit;
    }
  }
`;

function MarkDownWrapper({ className, children }: IComponentProps): ReactElement {
  return <MarkdownStyleWrapper className={className}>{children}</MarkdownStyleWrapper>;
}

export default MarkDownWrapper;
