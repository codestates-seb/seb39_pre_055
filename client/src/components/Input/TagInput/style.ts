import styled, { css } from 'styled-components';

interface Prop {
  isFocus: boolean;
  isError: boolean;
}

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const HashTagContainer = styled.div<Prop>`
  display: flex;
  margin-top: 6px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  ${({ isError }) =>
    isError &&
    css`
      border-color: rgb(208, 57, 62);
      outline: rgb(208, 57, 62) solid 1px;
    `}

  ${({ isFocus, isError }) =>
    isFocus &&
    !isError &&
    css`
      border-color: var(--blue-300);
      outline: var(--blue-100) solid 4px;
    `}

  input {
    width: 100%;
    height: 35px;
    padding: 8px 10px;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

export const HashTags = styled.div`
  display: flex;
  margin: auto 0;
  padding-left: 2px;
`;

export const ErrorMsg = styled.p`
  margin-top: 8px;
  margin-bottom: 30px;
  color: hsl(358, 62%, 52%);
  font-size: 12px;
`;
