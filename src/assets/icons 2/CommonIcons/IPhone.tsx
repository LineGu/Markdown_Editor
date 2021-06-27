import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IIconProps } from '@types';
import Theme from '@constants/Theme';

const StyledParentBox = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 30%;
  right: 0;
  @media (max-width: ${() => Theme.HDPC}) {
    top: 35%;
  }
  @media (max-width: ${() => Theme.PC}) {
    top: 35%;
  }
`;

const StyledPhoneIcon = styled.img`
  align-self: center;
  z-index: 1;
  width: 30vw;
  height: 40vw;
`;

const StyledWebIcon = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 4.5%;
  margin-right: 0.2%;
  width: 19vw;
  height: 36vw;
`;

function PhoneIcon({ className }: IIconProps): ReactElement {
  return (
    <StyledParentBox className={className}>
      <StyledPhoneIcon src="https://i.ibb.co/fFnTxRh/iphone.png" alt="Phone Book" />
      <StyledWebIcon src="https://i.ibb.co/r22NHYD/phone.png" alt="Phone Book" />
    </StyledParentBox>
  );
}

export default PhoneIcon;
