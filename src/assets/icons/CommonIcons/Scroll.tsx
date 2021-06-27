import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { CgScrollV } from 'react-icons/cg';
import { IIconProps } from '@types';
import Theme from '@constants/Theme';

const StyledScroll = styled(CgScrollV)<IIconProps>`
  width: 3vw;
  height: 3vw;
  margin: 1vw 0 0 0;
  color: ${() => Theme.INTRO};
`;

function ReactIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledScroll className={className} margin={margin} />;
}

export default ReactIcon;
