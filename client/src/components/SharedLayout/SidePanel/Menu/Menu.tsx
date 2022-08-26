import '../../../../assets/style/GlobalVariables.ts';

import { RiEarthLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CutstomLink, IndentedLi, Li, MenuList, StMenu } from './style';

const Menu = () => {
  const { pathname: currentPath } = useLocation();

  return (
    <StMenu>
      <ThemeProvider theme={{ currentPath }}>
        <CutstomLink to="/">Home</CutstomLink>
        <MenuList>
          <Li>
            <span>PUBLIC</span>
            <ul>
              <li>
                <CutstomLink to="/questions">
                  <RiEarthLine />
                  Questions
                </CutstomLink>
              </li>
              <IndentedLi>
                <CutstomLink to="/questions/tags">Tags</CutstomLink>
              </IndentedLi>
              <IndentedLi>
                <CutstomLink to="/questions/users">Users</CutstomLink>
              </IndentedLi>
              <IndentedLi>
                <CutstomLink to="/">Companies</CutstomLink>
              </IndentedLi>
            </ul>
          </Li>
        </MenuList>
      </ThemeProvider>
    </StMenu>
  );
};

export default Menu;
