import styled, { css } from 'styled-components';

export const HashTagContainer = styled.div<{ isFocus: boolean }>`
  display: flex;
  margin-top: 6px;
  margin-bottom: 30px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: var(--blue-300);
      outline: var(--blue-100) solid 4px;
    `}

  input {
    width: 100%;
    height: 35px;
    margin-bottom: 0;
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
