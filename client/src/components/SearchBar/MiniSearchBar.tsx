import { BsSearch } from 'react-icons/bs';
import styled, { css } from 'styled-components';

const Icon = styled(BsSearch)`
  height: 37%;
  width: 37%;
  fill: var(--black-700);
`;

const SearchButton = styled.button`
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
  margin-left: auto;
  margin-right: 3px;

  &:focus,
  &:hover {
    background-color: var(--black-050);
  }

  ${({ theme }) =>
    css`
      @media screen and (max-width: ${theme.breakPoints.mobile}) {
        width: 50px;
      }
    `}
`;

const MiniSearchBar = () => {
  return (
    <SearchButton>
      <Icon />
    </SearchButton>
  );
};

export default MiniSearchBar;
