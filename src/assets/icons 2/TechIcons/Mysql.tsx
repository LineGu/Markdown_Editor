import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SiMysql } from 'react-icons/si';
import { IIconProps } from '@types';

const StyledMysql = styled(SiMysql)<IIconProps>`
  width: 12vw;
  height: 12vw;
  color: #196c89;
  margin: ${({ margin }) => margin};
`;

function MoonIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledMysql className={className} margin={margin} />;
}

export default MoonIcon;
