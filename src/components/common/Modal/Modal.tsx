import React, { ReactElement } from 'react';
import styled from 'styled-components';
import STATE from '@constants/state';
import { IComponentProps } from '@types';

interface IModalProps extends IComponentProps {
  visibleState: string;
}

const StyledDescriptiveModal = styled.div<{ state: string }>`
  visibility: ${({ state }) => (state === STATE.HIDE ? STATE.HIDE : STATE.VISIBLE)};
  position: absolute;
`;

function Modal({ visibleState, className, children }: IModalProps): ReactElement {
  return (
    <StyledDescriptiveModal className={className} state={visibleState}>
      {children}
    </StyledDescriptiveModal>
  );
}

export default Modal;
