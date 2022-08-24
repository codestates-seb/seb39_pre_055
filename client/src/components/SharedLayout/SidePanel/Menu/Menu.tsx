import '../../../../assets/style/GlobalVariables.ts';

import { RiEarthLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import styled, { css, ThemeProvider } from 'styled-components';

const StMenu = styled.div`
  position: sticky;
  display: flex;
  flex-flow: column nowrap;
`;

const MenuList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  overflow-x: hidden;
  color: var(--black-500);
`;

const Li = styled.li`
  padding-top: 10px;

  span {
    display: inline-block;
    font-size: 0.7rem;
    margin: 10px 0px;
  }
`;

const CutstomLink = styled(Link)`
  box-sizing: border-box; // FIXME: 삭제 예정
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 40px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.4s all;

  &:link,
  &:visited {
    color: var(--black-500);
  }

  &:hover {
    background-color: var(--black-050);
    color: var(--black-900);
    transition: 0.4s all;
  }

  & > svg {
    margin: 5px;
  }

  &:nth-child(n + 3) {
    padding-left: 25px;
  }

  ${({ to, theme }) =>
    to === theme.currentPath &&
    css`
      background-color: var(--black-050);

      &::after {
        display: block;
        position: absolute;
        right: 0%;
        content: '';
        width: 3px;
        height: 100%;
        background-color: var(--orange-400);
      }
    `}
`;

const Menu = () => {
  const { pathname: currentPath } = useLocation();

  return (
    <StMenu>
      <ThemeProvider theme={{ currentPath }}>
        <CutstomLink to="/">Home</CutstomLink>
        <MenuList>
          <Li>
            <span>PUBLIC</span>
            <CutstomLink to="/questions">
              <RiEarthLine />
              Questions
            </CutstomLink>
            <CutstomLink to="/questions/tags">Tags</CutstomLink>
            <CutstomLink to="/questions/users">Users</CutstomLink>
            <CutstomLink to="/">Companies</CutstomLink>
          </Li>
        </MenuList>
      </ThemeProvider>
    </StMenu>
  );
};

export default Menu;
