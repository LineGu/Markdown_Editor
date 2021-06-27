import React, { ReactElement, useCallback } from 'react';
import { IEditComponentProps, IOnDragEventFunc } from '@types';
import MESSAGE from '@constants/message';
import DivTextArea from '@components/post/DivTextArea';
import ImgEditor from '../../../markdownController/Img';

function CodeMirror({ codemirrorProps: props, className }: IEditComponentProps): ReactElement {
  const { input, setInput, inputAreaElem, setUploadState, cm } = props;

  const getImgByDrag = useCallback((event: DragEvent): File => {
    event.stopPropagation();
    event.preventDefault();
    const { files } = event.dataTransfer as DataTransfer;
    const { 0: imgFile } = files;
    return imgFile;
  }, []);

  const uploadImgByDrag: IOnDragEventFunc = useCallback(async (event) => {
    const imgEditor = new ImgEditor(cm.current);
    const file = getImgByDrag(event);
    const uploadChecker = setInterval(() => {
      setUploadState(imgEditor.uploadingState);
    }, 10);
    await imgEditor.execute(file);
    setUploadState(imgEditor.uploadingState);
    clearInterval(uploadChecker);
  }, []);

  return (
    <DivTextArea
      className={className}
      placeholder={MESSAGE.POST_PLACEHOLDER}
      input={input}
      setInput={setInput}
      refElem={inputAreaElem}
      cm={cm}
      onDrop={uploadImgByDrag}
    />
  );
}

export default CodeMirror;
