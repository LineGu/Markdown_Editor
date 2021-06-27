import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ITextInputProps } from '@types';

const StyledTextInput = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  pointer-events: auto;
`;

function TextInput(textAreaProperty: ITextInputProps): ReactElement {
  const { placeholder, onChange, onFocus, onBlur, onKeyDown, className, state, setState } = textAreaProperty;

  return (
    <StyledTextInput
      className={className}
      placeholder={placeholder}
      spellCheck="false"
      value={state}
      onChange={(event) => {
        if (onChange) {
          onChange(event);
          return;
        }
        const TextAreaValue = event.target.value;
        setState(TextAreaValue);
      }}
      onFocus={() => {
        if (onFocus) onFocus();
      }}
      onBlur={() => {
        if (onBlur) onBlur();
      }}
      onKeyDown={(event) => {
        if (onKeyDown) onKeyDown(event);
      }}
      onKeyUp={(event) => {
        if (textAreaProperty.onKeyUp) textAreaProperty.onKeyUp(event);
      }}
      ref={textAreaProperty.refElem ?? null}
      onDrop={(event) => {
        if (textAreaProperty.onDrop) textAreaProperty.onDrop(event);
      }}
      onClick={() => {
        if (textAreaProperty.onClick) textAreaProperty.onClick();
      }}
      onDoubleClick={(event) => event.preventDefault()}
    />
  );
}

export default TextInput;
