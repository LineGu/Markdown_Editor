import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';
import { IIconProps } from '@types';

const StyledMenuIcon = styled(IoIosMenu)`
  width: 8vw;
  height: 8vw;
  max-width: 40px;
  max-height: 40px;
`;

function MenuIcon({ className }: IIconProps): ReactElement {
  return <StyledMenuIcon className={className} />;
}

export default MenuIcon;
