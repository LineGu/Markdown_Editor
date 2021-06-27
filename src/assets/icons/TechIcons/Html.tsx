import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DiHtml5 } from 'react-icons/di';
import { IIconProps } from '@types';

const StyledHtml = styled(DiHtml5)<IIconProps>`
  width: 12vw;
  height: 12vw;
  color: #006baf;
  margin: ${({ margin }) => margin};
`;

function HtmlIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledHtml className={className} margin={margin} />;
}

export default HtmlIcon;
