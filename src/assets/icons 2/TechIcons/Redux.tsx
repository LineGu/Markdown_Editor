import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SiRedux } from 'react-icons/si';
import { IIconProps } from '@types';

const StyledRedux = styled(SiRedux)<IIconProps>`
  width: 10vw;
  height: 10vw;
  color: #1e1e29;
  margin: ${({ margin }) => margin};
`;

function ReduxIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledRedux className={className} margin={margin} />;
}

export default ReduxIcon;
