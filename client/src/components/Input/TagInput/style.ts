import { MdError } from 'react-icons/md';
import styled, { css } from 'styled-components';

interface Prop {
  isFocus: boolean;
  isError: boolean;
  marginBottom: string;
}

export const Container = styled.div`
  /* margin-bottom: 30px; */
`;

export const HashTagContainer = styled.div<Prop>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
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

    &::placeholder {
      color: var(--black-300);
    }

    &:focus {
      outline: none;
    }
  }
`;

export const SLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
`;

export const SCommentP = styled.p`
  font-size: 0.8rem;
  color: var(--black-600);
  margin-bottom: 7px;
`;

export const ErrorIcon = styled(MdError)`
  position: absolute;
  top: 8px;
  right: 10px;
  color: hsl(358, 68%, 59%);
  font-size: 20px;
`;

export const HashTags = styled.div`
  display: flex;
  padding-left: 2px;
`;

export const ErrorMsg = styled.p`
  margin-top: 10px;
  color: hsl(358, 62%, 52%);
  font-size: 12px;

  & > a > strong {
    color: rgb(146, 32, 36);
    text-decoration: underline;
  }
`;
