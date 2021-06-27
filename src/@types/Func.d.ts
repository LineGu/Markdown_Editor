export declare interface IChangeOrderFunc {
  (props: IChangeOrderProps): void;
}

export declare interface IAnimateTextFunc {
  (props: IFadeInOutProps & IChangeOrderProps): void;
}

export declare interface IFadeFunc {
  (props: IFadeProps): void;
}

export declare interface IFadeInOutFunc {
  (props: IFadeInOutProps): void;
}
