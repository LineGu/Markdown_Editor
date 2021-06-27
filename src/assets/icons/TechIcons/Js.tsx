import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DiJsBadge } from 'react-icons/di';
import { IIconProps } from '@types';

const StyledJs = styled(DiJsBadge)<IIconProps>`
  width: 10vw;
  height: 10vw;
  color: #ffb33a;
  margin: ${({ margin }) => margin};
`;

function JsIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledJs className={className} margin={margin} />;
}

export default JsIcon;
