import { BsSearch } from 'react-icons/bs';
import styled, { css } from 'styled-components';

export const Icon = styled(BsSearch)`
  height: 53%;
  width: 53%;
  fill: var(--black-700);
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 0px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  border-radius: 10px;
  padding: 0px;
  margin-right: 3px;

  &:focus,
  &:hover {
    background-color: var(--black-050);
  }

  ${({ theme }) =>
    css`
      @media screen and (max-width: ${theme.breakPoints.mobile}) {
        flex: 0 0 35px;
        margin-left: auto;
        width: 50px;
      }
    `}
`;
