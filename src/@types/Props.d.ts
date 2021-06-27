import { ReactNode, SetStateAction, Dispatch } from 'react';

export declare interface IButtonProps {
  onClick?: ((event?: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export declare interface IColorProps {
  color?: string;
}

export declare interface IComponentProps {
  children?: ReactNode;
  className?: string;
}

export declare interface IDynamicStyledProps extends IColorProps {
  margin?: string;
  opacity?: string;
}

export declare interface IOnClickEditButton {
  input: string;
  cursorPosition: number[];
  moveCursor: (positionToGo: number[]) => void;
}

export declare interface IEditComponentProps extends IComponentProps {
  codemirrorProps: {
    inputAreaElem: React.RefObject<HTMLTextAreaElement>;
    setUploadState: React.Dispatch<React.SetStateAction<IUploadState>>;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    cm: React.MutableRefObject<EditorFromTextArea>;
  };
}

export declare interface EditorIconProps {
  onClick: IOnClickSvgFunc;
}

export declare interface IIconProps {
  margin?: string;
  color?: string;
  className?: string;
}

export declare interface ILinkProps {
  href: string;
  children: ReactNode;
}

export declare interface ILinkPageProps {
  linkName?: string;
  currentPage: string;
}

export declare interface IPagePorps {
  mode: string;
}

export declare interface IPostInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export declare interface IUploadState {
  progress: number;
  error: string;
}

export declare interface ITableProps {
  tableCount?: number[];
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  cursorPosition: number[];
}

export declare interface ITableOnClick {
  onClick: (editType: string, tableCount: number[]) => void;
}

export declare interface ITextInputProps extends IComponentProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  onDrop?: (event: React.DragEvent<HTMLTextAreaElement>) => void;
  refElem?: React.RefObject<HTMLTextAreaElement>;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClick?: () => void;
}

export declare interface IThemeContextType {
  mode?: string;
  changeMode?: () => void;
}

export declare interface IFadeInOutProps {
  isMounted: boolean;
  setMargin: Dispatch<SetStateAction<string>>;
  setOpacity?: Dispatch<SetStateAction<string>>;
}

export declare interface IChangeOrderProps extends IColorProps {
  isMounted: boolean;
  textList: string[];
  setColor: Dispatch<SetStateAction<string>>;
  setIntro: Dispatch<SetStateAction<string>>;
}

export declare interface IFadeProps extends IFadeInOutProps {
  timer: NodeJS.Timeout;
  method: string;
}
