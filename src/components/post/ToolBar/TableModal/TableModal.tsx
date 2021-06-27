import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { IComponentProps, setStateBool } from '@types';
import Block from './Block';

interface ITableModalProps extends IComponentProps {
  isHidden: boolean;
  setIsHidden: setStateBool;
  onClick: (editType: string, tableCount: number[]) => void;
}

const StyledModal = styled.div<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  position: absolute;
  flex-direction: column;
  margin: 0;
  padding: 5px 15px 10px 15px;
  border-radius: 0.2em;
  pointer-events: visibleFill;
  z-index: 10;
  background-color: ${() => Theme.MODAL_EDIT};

  & > span {
    margin: 5px 0px;
    color: ${() => Theme.HEADER_BACK};
  }
`;

function TableModal({ className, isHidden, setIsHidden, onClick }: ITableModalProps): ReactElement {
  const initValueCheckedPoint = [-1, -1];
  const [checkedPoint, setCheckedPoint] = useState<number[]>(initValueCheckedPoint);
  const [xPoint, yPoint] = checkedPoint;

  const resetCheckedPoint = useCallback(() => setCheckedPoint(initValueCheckedPoint), []);

  const hideTableModal = useCallback(() => {
    setIsHidden(true);
    resetCheckedPoint();
  }, []);

  const blockPorps = { checkedPoint, setCheckedPoint, resetCheckedPoint, onClick };

  const printCurrentCheckedPoint = useCallback(() => {
    const isChecked = checkedPoint[0] !== initValueCheckedPoint[0];
    const [rowCount, columnCount] = [xPoint + 1, yPoint + 1];
    return isChecked ? `${rowCount} x ${columnCount} 표` : '표 삽입';
  }, [checkedPoint]);

  useEffect(() => {
    document.addEventListener('click', hideTableModal);
    document.addEventListener('mouseover', resetCheckedPoint);
  }, []);

  return (
    <StyledModal isHidden={isHidden} className={className}>
      <span>{printCurrentCheckedPoint()}</span>
      <Block blockPorps={blockPorps} />
    </StyledModal>
  );
}

export default TableModal;
