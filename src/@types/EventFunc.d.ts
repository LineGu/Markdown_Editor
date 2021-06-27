export declare interface IEditFuncProps {
  (event?: React.MouseEvent<SVGElement, MouseEvent>, tableCount?: number[]): void;
}

export declare interface IOnKeyboardFunc {
  (event: React.KeyboardEvent<HTMLTextAreaElement>): void;
}

export declare interface IOnChangeFunc {
  (event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export declare interface IOnChangeFileFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}

export declare interface IOnClickElemFun {
  (event: React.MouseEvent<HTMLTextAreaElement>): void;
}

export declare interface IOnClickDivElemFunc {
  (event: React.MouseEvent<HTMLDivElement>): void;
}

export declare interface IOnClickSvgFunc {
  (event: React.MouseEvent<SVGElement, MouseEvent>): void;
}

export declare interface IOnClickFunc {
  (event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export declare interface IOnHoverDivFunc {
  (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

export declare interface IOnDragEventFunc {
  (event: DragEvent): void;
}

export declare interface IEditImgFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}
