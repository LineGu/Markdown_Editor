import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { BsTable } from 'react-icons/bs';
import TableModal from '@components/post/ToolBar/TableModal';
import { IOnClickSvgFunc, ITableOnClick } from '@types';

const StyledTableIcon = styled(BsTable)`
  width: 20px;
  height: 20px;
  color: ${() => Theme.INTRO};
  opacity: 60%;
  pointer-events: visibleFill;

  @media (max-width: ${() => Theme.MOBILE}) {
    width: 15px;
    height: 15px;
  }
  &:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

const TableWrapper = styled.div`
  & > div:not(#table) {
    margin-left: 2%;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    display: none;
  }
`;

function TableButton({ onClick }: ITableOnClick): ReactElement {
  const [isHiddenTableModal, setIsHidden] = useState<boolean>(true);

  const controlTableModal: IOnClickSvgFunc = (event) => {
    setIsHidden(!isHiddenTableModal);
    event.stopPropagation();
  };

  return (
    <TableWrapper>
      <StyledTableIcon id="table" onClick={controlTableModal} />
      <TableModal isHidden={isHiddenTableModal} setIsHidden={setIsHidden} onClick={onClick} />
    </TableWrapper>
  );
}

export default TableButton;
