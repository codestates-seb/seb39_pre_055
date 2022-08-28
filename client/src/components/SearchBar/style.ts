import { BsSearch } from 'react-icons/bs';
import styled, { css } from 'styled-components';

import { SearchBarSize } from './SearchBar';

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 180px;
  margin: 7px;

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
