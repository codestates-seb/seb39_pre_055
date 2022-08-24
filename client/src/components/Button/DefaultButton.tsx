import styled, { css } from 'styled-components';

export interface ButtonProps {
  color: string;
  mainCode: string;
  hoverCode?: string /* hover 시 나타낼 색상(색상 분류(blue, black, powder 등)는 같아야 함) */;
  textColor?: string;
  width?: string;
  height?: string;
}

const DefaultBtn = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 3px;
  border: 0px;
  transition: 0.4s all;

  &:hover {
    transition: 0.4s all;
  }

  ${({ color, mainCode, hoverCode, textColor, width, height }: ButtonProps) =>
    color &&
    mainCode &&
    css`
      color: ${textColor || 'white'};
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

export default DefaultBtn;
