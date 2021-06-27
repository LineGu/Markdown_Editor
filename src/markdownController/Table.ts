import Cursor from './Cursor';

interface IExecute {
  execute: (cursor: Cursor, textsByLine: string[]) => void;
}

export default class Table implements IExecute {
  private _textToInsert: string;

  constructor() {
    this._textToInsert = '';
  }

  public setTextToInsert(tableCount: number[]): void {
    const [row, column] = tableCount ?? [-1, -1];
    const rowText = `|${'    |'.repeat(row)}\n|${'----|'.repeat(row)}`;
    const columnText = `${'\n'}${'|'}${'    |'.repeat(row)}`;
    this._textToInsert = `\n\n${rowText}${columnText.repeat(column - 1)}\n`;
  }

  public execute = (cursor: Cursor, textsByLine: string[]): void => {
    const updatedTextsByLine = textsByLine;
    const { startLine, startIndex } = cursor;
    const lineText = updatedTextsByLine[startLine];
    updatedTextsByLine[startLine] = lineText.slice(0, startIndex) + this._textToInsert + lineText.slice(startIndex);
    cursor.codeMirror.setValue(updatedTextsByLine.join('\n'));
  };
}
