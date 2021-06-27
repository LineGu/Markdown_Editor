import Cursor from './Cursor';

interface IExecute {
  execute: (cursor: Cursor, textsByLine: string[]) => void;
}

interface IEditTexts {
  bold: string[];
  italic: string[];
  link: string[];
  code: string[];
  [editType: string]: string[];
}

const editTexts: IEditTexts = {
  bold: ['**', '텍스트', '**'],
  italic: ['_', '텍스트', '_'],
  link: ['[', '링크텍스트', '](링크)'],
  code: ['\n```\n', 'Code', '\n```\n'],
};

export default class Text implements IExecute {
  protected frontText: string;

  protected bodyText: string;

  protected backText: string;

  constructor(editType: string) {
    [this.frontText, this.bodyText, this.backText] = editTexts[editType];
  }

  public execute = (cursor: Cursor, textsByLine: string[]): void => {
    const updatedTextsByLine = textsByLine;
    const { startLine: firstLine, startIndex: firstIndex, isSelected } = cursor;
    if (isSelected) this.bodyText = cursor.codeMirror.getSelection();
    if (!isSelected) {
      this._insertText(updatedTextsByLine[firstLine], firstIndex, this.bodyText);
      const { endIndex } = cursor;
      cursor.setEndIndex(endIndex + this.bodyText.length);
    }
    this._delSameText(cursor, textsByLine);
    const updatedInput = this.frontText + this.bodyText + this.backText;
    const { startLine, startIndex, endLine, endIndex } = cursor;
    const startPos = { line: startLine, ch: startIndex };
    const endPos = { line: endLine, ch: endIndex };
    cursor.codeMirror.replaceRange(updatedInput, startPos, endPos);
    if (this.frontText === '\n```\n') {
      const cursorStartPos = { line: startLine + 2, ch: 0 };
      const cursorEndPos = { line: endLine + 2, ch: endIndex };
      cursor.setSelection(cursorStartPos, cursorEndPos);
      return;
    }
    const cursorStartPos = { line: startLine, ch: startIndex + this.frontText.length };
    const cursorEndPos = { line: endLine, ch: cursorStartPos.ch + this.bodyText.length };
    cursor.setSelection(cursorStartPos, cursorEndPos);
  };

  private _insertText = (text: string, idx: number, textToInsert: string): string => {
    const updatedText = text.slice(0, idx) + textToInsert + text.slice(idx);
    return updatedText;
  };

  private _delSameText = (cursor: Cursor, textsByLine: string[]): void => {
    const { startLine, endLine, startIndex, endIndex } = cursor;
    const beforeText = textsByLine[startLine].slice(startIndex - this.frontText.length, startIndex);
    const afterText = textsByLine[endLine].slice(endIndex, endIndex + this.backText.length);
    const hasSameText = beforeText === this.frontText && afterText === this.backText;
    if (hasSameText) {
      cursor.setStartIndex(startIndex - this.frontText.length);
      cursor.setEndIndex(endIndex + this.backText.length);
      this.frontText = '';
      this.backText = '';
    }
  };
}
