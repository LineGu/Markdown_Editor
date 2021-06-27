import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsFillImageFill } from 'react-icons/bs';
import Theme from '@constants/Theme';
import Finder from '@components/post/ToolBar/Buttons/Finder';
import { IOnClickSvgFunc, IEditImgFunc } from '@types';

interface IImgButtonProps {
  onClick: (file: File) => Promise<void>;
}

const StyledImageIcon = styled(BsFillImageFill)`
  width: 20px;
  height: 20px;
  color: ${() => Theme.INTRO};
  opacity: 60%;
  pointer-events: visibleFill;

  @media (max-width: ${() => Theme.MOBILE}) {
    width: 15px;
    height: 15px;
  }
  &:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

function ImgButton({ onClick }: IImgButtonProps): ReactElement {
  const openFinder: IOnClickSvgFunc = (event) => {
    const finderElem = event.currentTarget.nextSibling as HTMLButtonElement;
    finderElem.click();
  };

  const selectImgAndUpload: IEditImgFunc = async (event) => {
    const finderElem = event.target as HTMLInputElement;
    const { 0: file } = finderElem.files as FileList;
    if (!file) return;
    onClick(file);
  };

  return (
    <>
      <StyledImageIcon id="image" onClick={openFinder} />
      <Finder onChange={selectImgAndUpload} />
    </>
  );
}

export default ImgButton;
