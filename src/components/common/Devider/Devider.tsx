import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { IComponentProps } from '@types';

const StyledDevider = styled.hr`
  position: absolute;
  width: 9vw;
  border: 4px solid ${() => Theme.EMPHASIS};
  @media (max-width: ${() => Theme.MOBILE}) {
    width: 4em;
    border: 2px solid ${() => Theme.EMPHASIS};
  }
`;

function Devider({ className }: IComponentProps): ReactElement {
  return <StyledDevider className={className} />;
}

export default Devider;
