import { EditorFromTextArea, Position } from 'codemirror';

export default class Cursor {
  public codeMirror: EditorFromTextArea;

  public startLine = 0;

  public endLine = 0;

  public startIndex = 0;

  public endIndex = 0;

  public isSelected = false;

  constructor(cm: EditorFromTextArea) {
    this.codeMirror = cm;
    this.findCursorPostion();
  }

  public setStartLine = (idx: number): void => {
    this.startLine = idx;
  };

  public setEndLine = (idx: number): void => {
    this.endLine = idx;
  };

  public setEndIndex = (idx: number): void => {
    this.endIndex = idx;
  };

  public setStartIndex = (idx: number): void => {
    this.startIndex = idx;
  };

  public findCursorPostion = (): void => {
    const isSelected = this.codeMirror.somethingSelected();
    const { line: startLine, ch: startIndex } = this.codeMirror.getCursor('from');
    const { line: endLine, ch: endIndex } = this.codeMirror.getCursor('to');
    this.startLine = startLine;
    this.endLine = endLine;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this.isSelected = isSelected;
  };

  public moveCursor(posToGo: Position): void {
    this.codeMirror.focus();
    this.codeMirror.setCursor(posToGo);
  }

  public setSelection(startPos: Position, endPos: Position): void {
    this.codeMirror.focus();
    this.codeMirror.setSelection(startPos, endPos);
  }
}
