import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import Buttons from '@components/post/ToolBar/Buttons';
import { IEditComponentProps } from '@types';
import ImgEditor from '../../../markdownController/Img';
import Editors from '../../../markdownController/Editor';

const StyledEditButtonBox = styled.div`
  display: flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 20px 60px;
  pointer-events: none;

  @media (max-width: ${() => Theme.MOBILE}) {
    flex-wrap: nowrap;
    margin: 0.2em 0.5em 1em 0.5em;
    pointer-events: auto;
  }

  @media (max-width: ${() => Theme.PC}) {
    flex-wrap: wrap;
  }

  & > svg,
  & > div > svg {
    margin: 0 20px 15px 20px;
    @media (max-width: ${() => Theme.MOBILE}) {
      margin: 0 0.5em;
    }
  }
`;

function ToolBar({ codemirrorProps }: IEditComponentProps): ReactElement {
  const { setUploadState, cm } = codemirrorProps;

  const onClickEditButton = (editType: string, tableCount?: number[]): void => {
    const editor = new Editors(cm.current);
    editor.onEdit(editType, tableCount);
  };

  const onInsertImg = async (file: File): Promise<void> => {
    const imgEditor = new ImgEditor(cm.current);
    const uploadChecker = setInterval(() => {
      setUploadState(imgEditor.uploadingState);
    }, 10);
    await imgEditor.execute(file);
    setUploadState(imgEditor.uploadingState);
    clearInterval(uploadChecker);
  };

  return (
    <StyledEditButtonBox>
      <Buttons.H1 onClick={() => onClickEditButton('h1')} />
      <Buttons.H2 onClick={() => onClickEditButton('h2')} />
      <Buttons.H3 onClick={() => onClickEditButton('h3')} />
      <Buttons.Bold onClick={() => onClickEditButton('bold')} />
      <Buttons.Italic onClick={() => onClickEditButton('italic')} />
      <Buttons.Link onClick={() => onClickEditButton('link')} />
      <Buttons.Img onClick={onInsertImg} />
      <Buttons.Quote onClick={() => onClickEditButton('quote')} />
      <Buttons.Table onClick={onClickEditButton} />
      <Buttons.Code onClick={() => onClickEditButton('code')} />
      <Buttons.CheckBox onClick={() => onClickEditButton('checkbox')} />
    </StyledEditButtonBox>
  );
}

export default ToolBar;
