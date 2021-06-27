import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsTypeBold } from 'react-icons/bs';
import { EditorIconProps } from '@types';
import Theme from '@constants/Theme';

const StyledBoldIcon = styled(BsTypeBold)`
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

function BoldButton({ onClick }: EditorIconProps): ReactElement {
  return <StyledBoldIcon id="bold" onClick={onClick} />;
}

export default BoldButton;
