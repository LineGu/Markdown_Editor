import axios from 'axios';
import { URL } from '@constants/url';
import { headerOption } from '@config/headerForImgur';
import { EditorFromTextArea } from 'codemirror';
import Cursor from './Cursor';

export default class ImgEditor {
  protected cursor: Cursor;

  private _textToInsert: string;

  private _maxSize: number;

  public uploadingState: { progress: number; error: string };

  protected textsByLine: string[];

  constructor(cm: EditorFromTextArea) {
    this.cursor = new Cursor(cm);
    this._textToInsert = '';
    this._maxSize = 5000000;
    this.uploadingState = { progress: 0, error: '' };
    this.textsByLine = cm.getValue().split('\n');
  }

  private _setTextToInsert(url: string): void {
    this._textToInsert = `\n![](${url})\n`;
  }

  private _setUploadingState = (ProgressEvent: ProgressEvent): void => {
    const uploadingProgress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100);
    this.uploadingState = { progress: uploadingProgress, error: '' };
  };

  public uploadImg = async (file: File): Promise<void> => {
    const isExcessSize = file.size > this._maxSize;
    const isValidFile = file && isExcessSize;
    if (!isValidFile) this.uploadingState = { progress: 0, error: 'NOT_VAILD_FILE' };
    const imgData = new FormData();
    imgData.append('image', file);

    try {
      const postConfig = {
        headers: headerOption,
        onUploadProgress: (ProgressEvent: ProgressEvent) => this._setUploadingState(ProgressEvent),
      };

      const response = await axios.post(URL.IMGUR, imgData, postConfig);
      const imgUrl = response.data.data.link;
      this.uploadingState = { progress: 0, error: '' };
      this._setTextToInsert(imgUrl);
    } catch (error) {
      this.uploadingState = { progress: 0, error };
    }
  };

  public execute = async (file: File): Promise<void> => {
    await this.uploadImg(file);
    const updatedTextsByLine = this.textsByLine;
    const { startLine, startIndex } = this.cursor;
    const lineText = updatedTextsByLine[startLine];
    updatedTextsByLine[startLine] = lineText.slice(0, startIndex) + this._textToInsert + lineText.slice(startIndex);
    this.cursor.codeMirror.setValue(updatedTextsByLine.join('\n'));
    this.cursor.moveCursor({ line: startLine + 1, ch: 2 });
  };
}
