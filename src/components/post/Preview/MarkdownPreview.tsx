import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { MarkdownStyleWrapper, CodeBox, LinkRenderer } from '@components/common/MarkdownStyleWrapper/index';
import useDependencyTheme from '@hooks/useDependencyTheme';
import BlankController from '../../../markdownController/blank';

interface IPreviewProps {
  input: string;
  className?: string;
}

const StyledPreviewBox = styled(MarkdownStyleWrapper)`
  width: 50%;
  background-color: ${() => Theme.PREVIEW_BACK};

  @media (max-width: ${() => Theme.PC}) {
    display: none;
  }
`;

function MarkdownPreview({ input, className }: IPreviewProps): ReactElement {
  useDependencyTheme();
  const blankController = new BlankController();
  const updatedInput = blankController.applyBlankToMarkdown(input);

  const renderOptions = { code: CodeBox, link: LinkRenderer };

  return (
    <StyledPreviewBox className={className}>
      <ReactMarkdown
        plugins={[[gfm, { tableCellPadding: 'true' }]]}
        source={updatedInput}
        className="codeMirror"
        renderers={renderOptions}
      />
    </StyledPreviewBox>
  );
}

export default MarkdownPreview;
