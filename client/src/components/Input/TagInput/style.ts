import { MdError } from 'react-icons/md';
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
  align-items: center;
  margin-top: 6px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  ${({ isError }) =>
    isError &&
    css`
      border-color: hsl(358, 68%, 59%);
      outline: hsl(358, 76%, 90%) solid 4px;
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

export const ErrorIcon = styled(MdError)`
  color: hsl(358, 68%, 59%);
  margin-right: 10px;
  font-size: 20px;
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
