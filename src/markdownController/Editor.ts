import { EditorFromTextArea } from 'codemirror';
import Cursor from './Cursor';
import Head from './Head';
import Text from './Text';
import Table from './Table';

interface IEditor {
  cursor: Cursor;
  onEdit(editType: string): void;
}

export default class Editor implements IEditor {
  public cursor: Cursor;

  protected textsByLine: string[];

  constructor(cm: EditorFromTextArea) {
    this.cursor = new Cursor(cm);
    this.textsByLine = cm.getValue().split('\n');
  }

  protected _getEditor = (editTtype: string): Head | Text | Table => {
    const headType = ['h1', 'h2', 'h3', 'quote', 'checkbox'];
    const textType = ['bold', 'italic', 'link', 'code'];
    if (headType.includes(editTtype)) return new Head(editTtype);
    if (textType.includes(editTtype)) return new Text(editTtype);
    if (editTtype === 'table') return new Table();
    return new Head(editTtype);
  };

  public onEdit(editType: string, tableCount?: number[]): void {
    const editor = this._getEditor(editType);
    if (tableCount) (editor as Table).setTextToInsert(tableCount);
    editor.execute(this.cursor, this.textsByLine);
  }
}
