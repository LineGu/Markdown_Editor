const blankList = ['\\', '', '&nbsp;'];

export const getLastText = (input: string): string => {
  return input.slice(input.length - 1, input.length);
};

export const isEmptyLine = (input: string): boolean => {
  return input === '';
};

export const hideLastSlash = (input: string): string => {
  return `${input}&nbsp;`;
};

export const createTextsByLine = (input: string): string[] => {
  return input.split('\n');
};

export const applyBlankToMarkdown = (input: string): string => {
  if (isEmptyLine(input)) return `\\`;
  return input;
};

export const changeText = (TextsByLine: string[], idxsToChange: number[], textToChange: string): string[] => {
  const updatedTextsByLine = [...TextsByLine];
  idxsToChange.forEach((idx) => {
    updatedTextsByLine[idx] = textToChange;
  });

  return updatedTextsByLine;
};

export const insertText = (TextsByLine: string[], idxsToChange: number[], textToInsert: string): string[] => {
  let updatedTextsByLine = [...TextsByLine];
  idxsToChange.forEach((idx) => {
    updatedTextsByLine = [...updatedTextsByLine.slice(0, idx), textToInsert, ...updatedTextsByLine.slice(idx)];
  });

  return updatedTextsByLine;
};

export const findLastTextIdx = (TextsByLine: string[]): number => {
  let textIdx = -1;
  TextsByLine.forEach((text, idx) => {
    if (!blankList.includes(text)) textIdx = idx;
  });
  return textIdx;
};

export const isBlankAfterLastText = (TextsByLine: string[], idx: number): boolean => {
  const idxOfLastText = findLastTextIdx(TextsByLine);
  if (idx > idxOfLastText && blankList.includes(TextsByLine[idx])) return true;
  return false;
};

export const isBlankBeforeText = (TextsByLine: string[], idx: number): boolean => {
  const currentText = TextsByLine[idx];
  const beforeText = TextsByLine[idx - 1];
  if (!blankList.includes(currentText) && blankList.includes(beforeText)) return true;
  return false;
};

export const getBlankIdxsAfterLastText = (TextsByLine: string[]): number[] => {
  const blankIdxs: number[] = [];
  TextsByLine.forEach((_, index): void => {
    if (isBlankAfterLastText(TextsByLine, index)) blankIdxs.push(index);
  });
  return blankIdxs;
};

export const getBlankIdxsBeforeText = (TextsByLine: string[]): number[] => {
  const blankIdxs: number[] = [];
  TextsByLine.forEach((_, index): void => {
    if (isBlankBeforeText(TextsByLine, index)) blankIdxs.push(index - 1);
  });
  return blankIdxs;
};

export const getBlankIdxsInCodeBox = (TextsByLine: string[]): number[] => {
  const idxsBlankInCodeBox: number[] = [];
  let isInCodeBox = false;
  TextsByLine.forEach((text, index) => {
    if (text.slice(0, 3) === '```') isInCodeBox = !isInCodeBox;
    if ((text === '\\' || text === '&nbsp;') && isInCodeBox) idxsBlankInCodeBox.push(index);
  });

  return idxsBlankInCodeBox;
};

export const getBlankIdxsAfterTable = (TextsByLine: string[]): number[] => {
  const idxsSlashAfterTable: number[] = [];
  TextsByLine.forEach((text, index) => {
    if (index !== 0 && text.slice(0, 1) !== '|' && getLastText(TextsByLine[index - 1]) === '|')
      idxsSlashAfterTable.push(index);
  });
  return idxsSlashAfterTable;
};
