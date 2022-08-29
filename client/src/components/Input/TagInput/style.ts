import styled, { css } from 'styled-components';

export const HashTagContainer = styled.div<{
  isFocus: boolean;
  marginBottom: string;
}>`
  display: flex;

  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: var(--blue-300);
      outline: var(--blue-100) solid 4px;
    `}

  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom};
  `}

  input {
    width: 100%;
    height: 35px;
    margin-bottom: 0;
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

export const HashTags = styled.div`
  display: flex;
  margin: auto 0;
  padding-left: 2px;
`;
