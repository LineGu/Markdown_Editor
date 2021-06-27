import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IIconProps } from '@types';
import Theme from '@constants/Theme';

const StyledParentBox = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 10%;
  @media (max-width: ${() => Theme.HDPC}) {
    top: 20%;
  }
  @media (max-width: ${() => Theme.PC}) {
    top: 30%;
  }
`;

const StyledMacIcon = styled.img`
  align-self: center;
  z-index: 0;
  width: 60vw;
  height: 50vw;
`;

const StyledWebIcon = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 32.1%;
  width: 55vw;
  height: 30.6vw;
`;

function MacIcon({ className }: IIconProps): ReactElement {
  return (
    <StyledParentBox className={className}>
      <StyledMacIcon src="https://i.ibb.co/9pbNKSW/mac.png" alt="Mac Book" />
      <StyledWebIcon src="https://i.ibb.co/bb81c2r/web.png" alt="Mac Book" />
    </StyledParentBox>
  );
}

export default MacIcon;
