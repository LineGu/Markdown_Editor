import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { IIconProps } from '@types';

const StyledUpArrow = styled(IoIosArrowUp)`
  width: 8vmin;
  height: 8vmin;
`;

function UpArrowIcon({ className }: IIconProps): ReactElement {
  return <StyledUpArrow className={className} />;
}

export default UpArrowIcon;
