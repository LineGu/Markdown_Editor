import { useState, useEffect } from 'react';
import { setStateNumberArr } from '@types';

interface ICursorHookReturn {
  cursorPosition: number[];
  setCursorPosition: setStateNumberArr;
  updateCusorPoint: () => void;
  moveCursor: (positionToGo: number[]) => void;
}

const useCursorPoint = (inputElem: HTMLTextAreaElement | null): ICursorHookReturn => {
  const initCursor = [0, 0];
  const [cursorPosition, setCursorPosition] = useState(initCursor);

  const updateCusorPoint = () => {
    const cursorPointStart = inputElem?.selectionStart ?? 0;
    const cursorPointEnd = inputElem?.selectionEnd ?? 0;
    const updatedCursorPosition = [cursorPointStart, cursorPointEnd];
    setCursorPosition(updatedCursorPosition);
  };

  const moveCursor = (positionToGo: number[]) => {
    const [startPosition, endPosition] = positionToGo;
    inputElem?.focus();
    inputElem?.setSelectionRange(startPosition, endPosition);
    setCursorPosition(positionToGo);
  };

  useEffect(() => {
    inputElem?.addEventListener('click', updateCusorPoint);
    inputElem?.addEventListener('keyup', updateCusorPoint);
  }, [inputElem]);

  return { cursorPosition, setCursorPosition, updateCusorPoint, moveCursor };
};

export default useCursorPoint;
