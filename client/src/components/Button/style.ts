import styled, { css } from 'styled-components';

import { ButtonProps } from './DefaultButton';

export const Buttton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 0px;
  padding: 2px 9px;
  transition: 0.4s all;
  font-size: 0.85rem;

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

  ${({ isError }) =>
    isError &&
    css`
      background-color: #f05b41;

      &:hover {
        background-color: #f0321b;
      }

      &:focus {
        outline: #f0cbca solid 4px;
      }
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: #b7e1f7;

      &:hover {
        background-color: #b7e1f7;
      }
    `}
`;
