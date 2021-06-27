import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsTypeH1 } from 'react-icons/bs';
import { EditorIconProps } from '@types';
import Theme from '@constants/Theme';

const StyledH1Icon = styled(BsTypeH1)`
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

function H1Button({ onClick }: EditorIconProps): ReactElement {
  return <StyledH1Icon id="h1" onClick={onClick} />;
}

export default H1Button;
