import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsLink45Deg } from 'react-icons/bs';
import { EditorIconProps } from '@types';
import Theme from '@constants/Theme';

const StyledLinkIcon = styled(BsLink45Deg)`
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

function LinkButton({ onClick }: EditorIconProps): ReactElement {
  return <StyledLinkIcon id="link" onClick={onClick} />;
}

export default LinkButton;
