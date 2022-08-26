import { BsSearch } from 'react-icons/bs';
import styled, { css } from 'styled-components';

import { SearchBarSize } from './SearchBar';

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 180px;

  ${({ width = 'auto', height = '32px' }: SearchBarSize) => css`
    width: ${width};
    height: ${height};
  `}
  ${({ theme, responsive }) =>
    responsive &&
    css`
      @media screen and (max-width: ${theme.breakPoints.mobile}) {
        display: none;
      }
    `}
`;

export const Search = styled.input`
  width: 100%;
  padding-left: 27px;
  border: 1px solid var(--black-300);
  border-radius: 3px;

  &::placeholder {
    display: none;
    color: var(--black-300);
  }
  &:focus {
    border-color: var(--blue-300);
    outline: var(--blue-100) solid 4px;
  }
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translate(-50%, -50%);
  fill: var(--black-300);
`;

export const Icon = styled(BsSearch)`
  height: 37%;
  width: 37%;
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
        margin-left: auto;
        width: 50px;
      }
    `}
`;
