import styled, { css } from 'styled-components';

import { ButtonProps } from './DefaultButton';

export const Btn = styled.button`
  border-radius: 3px;
  border: 0px;
  transition: 0.4s all;

  &:hover {
    transition: 0.4s all;
  }

  ${({
    color,
    mainCode,
    hoverCode,
    textColor = 'white',
    width = 'auto',
    height = '32px',
  }: ButtonProps) =>
    color &&
    mainCode &&
    css`
      color: ${textColor};
      background-color: ${`var(--${color}-${mainCode})`};
      width: ${width};
      height: ${height};

      &:hover {
        background-color: ${`var(--${color}-${
          hoverCode || Number(mainCode) + 200
        })`};
      }
      &:focus {
        outline: ${`var(--${color}-100)`} solid 4px;
      }
    `}
`;
