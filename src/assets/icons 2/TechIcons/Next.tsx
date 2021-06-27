import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SiNextDotJs } from 'react-icons/si';
import { IIconProps } from '@types';

const StyledNext = styled(SiNextDotJs)<IIconProps>`
  width: 10vw;
  height: 10vw;
  color: #1e1e29;
  margin: ${({ margin }) => margin};
`;

function NextIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledNext className={className} margin={margin} />;
}

export default NextIcon;
