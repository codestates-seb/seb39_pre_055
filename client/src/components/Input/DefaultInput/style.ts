import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 15px;
  color: #0c0d0e;
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

export const SInput = styled.input`
  margin-bottom: 30px;
  padding: 8px 10px;
  width: 100%;
  height: 35px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  &::placeholder {
    color: var(--black-300);
  }

  &:focus {
    border-color: var(--blue-300);
    outline: var(--blue-100) solid 4px;
  }
`;
