import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IButtonProps, IComponentProps } from '@types';

const StyledButton = styled.button`
  outline: none;
  border: none;
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

function Button({ onClick, children, className, type = 'button' }: IButtonProps & IComponentProps): ReactElement {
  return (
    <StyledButton type={type} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
