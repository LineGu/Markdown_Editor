import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { IIconProps } from '@types';

const StyledDownArrow = styled(IoIosArrowDown)`
  width: 8vmin;
  height: 8vmin;
`;

function DownArrowIcon({ className }: IIconProps): ReactElement {
  return <StyledDownArrow className={className} />;
}

export default DownArrowIcon;
