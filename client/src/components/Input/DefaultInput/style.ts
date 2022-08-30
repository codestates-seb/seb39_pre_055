import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isError: boolean }>`
  position: relative;
  color: #0c0d0e;
  font-size: 15px;

  ${({ isError }) =>
    isError &&
    css`
      svg {
        position: absolute;
        top: 28px;
        right: 10px;
        color: hsl(358, 68%, 59%);
        font-size: 20px;
      }

      p {
        color: hsl(358, 62%, 52%);
        font-size: 12px;
      }
    `}
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

export const SInput = styled.input<{ isError: boolean }>`
  padding: 8px 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 35px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  &::placeholder {
    color: var(--black-300);
  }

  &:focus {
    border-color: ${({ isError }) => !isError && 'var(--blue-300)'};
    outline: ${({ isError }) => !isError && 'var(--blue-100) solid 4px'};
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: hsl(358, 68%, 59%);
      outline: hsl(358, 76%, 90%) solid 4px;
    `}
`;
