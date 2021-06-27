import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DiCss3 } from 'react-icons/di';
import { IIconProps } from '@types';

const StyledCss = styled(DiCss3)<IIconProps>`
  width: 12vw;
  height: 12vw;
  color: #006baf;
  margin: ${({ margin }) => margin};
`;

function CssIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledCss className={className} margin={margin} />;
}

export default CssIcon;
