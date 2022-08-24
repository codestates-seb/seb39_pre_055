import styled, { css } from 'styled-components';

interface BtnProps {
  color: string;
  mainCode: string;
  hoverCode?: string;
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

  ${({ color, mainCode, hoverCode }: BtnProps) =>
    color &&
    mainCode &&
    css`
      background-color: ${`var(--${color}-${mainCode})`};

      &:hover {
        background-color: ${`var(--${color}-${
          hoverCode || Number(mainCode) + 200
        })`};
      }
    `}
`;

export const BlueBtn = styled(DefaultBtn)`
  color: white;

  width: 60px;
`;

export const RoundBtn = styled(DefaultBtn)`
  color: var(--black-700);
  border-radius: 20px;
  width: 80px;
`;
