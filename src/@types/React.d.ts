import { SetStateAction, Dispatch } from 'react';

export declare type SetStateString = Dispatch<SetStateAction<string>>;

export declare type SetStateNum = Dispatch<SetStateAction<number>>;

export declare type setStateBool = Dispatch<SetStateAction<boolean>>;

export declare type setStateNumberArr = Dispatch<SetStateAction<number[]>>;

export declare type SetStateProcess = Dispatch<SetStateAction<IUploadState>>;

export declare type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
