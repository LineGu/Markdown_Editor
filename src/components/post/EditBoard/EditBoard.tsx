import React, { ReactElement, useState, useRef } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import TextArea from '@components/post/CodeMirror';
import PostTitleInput from '@components/post/TitleArea/index';
import EditorTagArea from '@components/post/TagArea';
import { EditorFromTextArea } from 'codemirror';
import { IPostInputProps, IUploadState } from '@types';
import ProcessBar from '@components/post/ProgressBar';
import Devider from '@components/common/Devider';
import useDependencyTheme from '@hooks/useDependencyTheme';
import EditButtonBox from '@components/post/ToolBar/ToolBar';

const EditorAreaWrapper = styled.div`
  width: 50%;
  height: 100vh;

  @media (max-width: ${() => Theme.PC}) {
    width: 100%;
  }

  @media (max-width: ${() => Theme.MOBILE}) {
    width: 100%;
  }
`;

const StyeldDevider = styled(Devider)`
  top: 13vh;
  left: 3vw;
  @media (max-width: ${() => Theme.MOBILE}) {
    top: 2.7em;
    left: 0.8em;
  }
`;

function EditBoard(MarkDownProps: IPostInputProps): ReactElement {
  useDependencyTheme();
  const inputAreaElem = useRef<HTMLTextAreaElement>(null);
  const cm = useRef<EditorFromTextArea>(null);
  const initUploadImgState = { progress: 0, error: '' };
  const [uploadState, setUploadState] = useState<IUploadState>(initUploadImgState);

  const codemirrorProps = { ...MarkDownProps, inputAreaElem, setUploadState, cm };
  return (
    <EditorAreaWrapper>
      <ProcessBar uploadState={uploadState} />
      <PostTitleInput />
      <StyeldDevider />
      <EditorTagArea />
      <EditButtonBox codemirrorProps={codemirrorProps} />
      <TextArea className="textInput" codemirrorProps={codemirrorProps} />
    </EditorAreaWrapper>
  );
}

export default EditBoard;
