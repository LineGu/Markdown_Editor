import Cursor from './Cursor';

interface IExecute {
  execute: (cursor: Cursor, textsByLine: string[]) => void;
}

interface IEditTexts {
  h1: string;
  h2: string;
  h3: string;
  quote: string;
  checkbox: string;
  [editType: string]: string;
}

const editTexts: IEditTexts = {
  h1: '# ',
  h2: '## ',
  h3: '### ',
  quote: '> ',
  checkbox: '- [ ] ',
};

export default class Head implements IExecute {
  protected textToInsert: string;

  constructor(editType: string) {
    this.textToInsert = editTexts[editType];
  }

  public execute = (cursor: Cursor, textsByLine: string[]): void => {
    const updatedTextsByLine = textsByLine;
    const { startLine: lineToEdit } = cursor;
    const textToEdit = this._delSameText(textsByLine[lineToEdit]);
    const updatedLineText = this.textToInsert + textToEdit;
    updatedTextsByLine[lineToEdit] = updatedLineText;
    const posToGo = { line: lineToEdit, ch: updatedLineText.length };
    cursor.codeMirror.setValue(updatedTextsByLine.join('\n'));
    cursor.moveCursor(posToGo);
  };

  private _delSameText = (text: string): string => {
    const isHeaderText = this.textToInsert.includes('# ');
    const hasHeaderText = text.slice(0, 4).includes('# ');
    if (isHeaderText && hasHeaderText) {
      const sameTagIdx = text.indexOf('# ') + 2;
      return text.slice(sameTagIdx);
    }
    const hasSameText = text.slice(0, 7).includes(this.textToInsert);
    if (hasSameText) return text.slice(this.textToInsert.length);
    return text;
  };
}
