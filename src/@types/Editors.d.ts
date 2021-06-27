import BoldEditor from 'src/markdownController/ToolBarEditors/Editors/Bold';
import CheckBoxEditor from 'src/markdownController/ToolBarEditors/Editors/CheckBox';
import CodeEditor from 'src/markdownController/ToolBarEditors/Editors/Code';
import HeadEditor from 'src/markdownController/ToolBarEditors/Editors/Head';
import ImgEditor from 'src/markdownController/Img';
import ItalicEditor from 'src/markdownController/ToolBarEditors/Editors/Italic';
import LinkEditor from 'src/markdownController/ToolBarEditors/Editors/Link';
import QuoteEditor from 'src/markdownController/ToolBarEditors/Editors/Quote';

export declare interface EditorType {
  h1: HeadEditor;
  h2: HeadEditor;
  h3: HeadEditor;
  bold: BoldEditor;
  italic: ItalicEditor;
  link: LinkEditor;
  code: CodeEditor;
  checkbox: CheckBoxEditor;
  quote: QuoteEditor;
  img: ImgEditor;
  [index: string]:
    | HeadEditor
    | BoldEditor
    | ItalicEditor
    | LinkEditor
    | CodeEditor
    | CheckBoxEditor
    | QuoteEditor
    | ImgEditor;
}
