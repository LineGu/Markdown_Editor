import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { setStateNumberArr, IOnHoverDivFunc } from '@types';

interface IBlockProps {
  blockPorps: {
    checkedPoint: number[];
    setCheckedPoint: setStateNumberArr;
    resetCheckedPoint: () => void;
    onClick: (editType: string, tableCount: number[]) => void;
  };
}

const BoxUnit = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  margin: 2px;
  padding: 0;
  border: 1px solid ${({ color }) => (color === Theme.HEADER_BACK ? Theme.OUT_LINE : Theme.HEADER_BACK)};
  background-color: ${({ color }) => color};
`;

const BlockBox = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

function Block({ blockPorps }: IBlockProps): ReactElement {
  const { checkedPoint, setCheckedPoint, resetCheckedPoint, onClick } = blockPorps;
  const rowBlockLength = 10;
  const columnBlockLength = 8;
  const rowBlockCount = new Array(rowBlockLength).fill(0);
  const columnBlockCount = new Array(columnBlockLength).fill(0);
  const [xPoint, yPoint] = checkedPoint;

  const addTableByClick = useCallback(() => {
    const [rowCount, columnCount] = [xPoint + 1, yPoint + 1];
    onClick('table', [rowCount, columnCount]);
    resetCheckedPoint();
  }, [checkedPoint]);

  const updateCheckedPoint: IOnHoverDivFunc = useCallback((event) => {
    const [xPointStr, yPointStr] = event.currentTarget.id.split(',');
    const newCheckedPoint = [parseInt(xPointStr, 10), parseInt(yPointStr, 10)];
    setCheckedPoint(newCheckedPoint);
    event.stopPropagation();
  }, []);

  const setBoxColor = useCallback(
    (columnNum, rowNum) => {
      const isCheckedBlock = checkedPoint[0] >= columnNum && checkedPoint[1] >= rowNum;
      return isCheckedBlock ? Theme.HEADER_BACK : Theme.MODAL_EDIT;
    },
    [checkedPoint],
  );

  return (
    <>
      {columnBlockCount.map((__, rowNum) => (
        <BlockBox
          key={rowNum}
          id="table"
          className="block_row_box"
          onClick={addTableByClick}
          onMouseOver={(event) => event.stopPropagation()}
        >
          {rowBlockCount.map((_, colNum) => (
            <BoxUnit
              key={colNum}
              id={`${colNum},${rowNum}`}
              onMouseOver={updateCheckedPoint}
              color={setBoxColor(colNum, rowNum)}
            />
          ))}
        </BlockBox>
      ))}
    </>
  );
}

export default Block;
