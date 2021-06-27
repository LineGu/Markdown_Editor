import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { SunIcon, MoonIcon } from '@icons';
import useDependencyTheme from '@hooks/useDependencyTheme';
import { IButtonProps, IComponentProps } from '@types';

const StyledToggle = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 31px;
  height: 31px;
  border: 1px solid ${() => Theme.BASE};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${() => Theme.TOGGLE_BACK};

  .sunImg {
    position: absolute;
    z-index: 5;
    margin: 3px 0 0 3px;
  }

  .moonImg {
    position: absolute;
    color: ${() => Theme.BASE};
    z-index: 5;
  }

  .Dark {
    background-color: ${() => Theme.TOGGLE_BACK};
    & > .moonImg {
      display: none;
    }
    & > .sunImg {
      color: ${() => Theme.WHITE};
    }
  }

  .Light {
    background-color: ${() => Theme.BLACK};
    & > .sunImg {
      display: none;
    }
  }

  &:hover {
    justify-content: flex-end;
    width: 130px;
    height: 30px;
    border-radius: 1em;
    cursor: pointer;
    transition: width 0.5s ease;

    div > .sunImg {
      color: ${() => Theme.MODE_MARK};
      transition: color 0.3s linear;
    }
    div > .moonImg {
      color: ${() => Theme.MODE_MARK};
      transition: color 0.3s linear;
    }
    .mode {
      display: inline-block;
      position: absolute;
      left: 10%;
      top: 15%;
      white-space: nowrap;
      word-break: nowrap;
      visibility: visible;
      opacity: 100%;
      margin: 2px 35px 0 0;
      color: ${() => Theme.TOGGLE_BTN};
      transition: color 0.3s linear 0.3s, visibility 0.3s linear 0.3s;
    }
  }
`;

const StyledIconBox = styled.div`
  position: relative;
  width: 27px;
  height: 27px;
  margin: 0 2px 0px 2px;
  border-radius: 50%;
  background-color: ${() => Theme.TOGGLE_BTN};
`;

const StyledModeText = styled.span`
  position: absolute;
  visibility: hidden;
  opacity: 100%;
`;

function ThemeButton({ className }: IButtonProps & IComponentProps): ReactElement {
  const { mode, changeMode } = useDependencyTheme();
  const [currentMode, newMode] = mode === 'LightMode' ? ['Light', 'Dark'] : ['Dark', 'Light'];

  return (
    <StyledToggle onClick={changeMode} theme={currentMode} className={className}>
      <StyledModeText className="mode">{newMode} Mode</StyledModeText>
      <StyledIconBox className={currentMode}>
        <MoonIcon className="moonImg" />
        <SunIcon className="sunImg" />
      </StyledIconBox>
    </StyledToggle>
  );
}

export default ThemeButton;
