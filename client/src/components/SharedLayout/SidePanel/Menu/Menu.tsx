import '../../../../assets/style/GlobalVariables.ts';

import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  CustomLink,
  EarthSVG,
  IndentedList,
  Li,
  MenuBox,
  MenuCategorySpan,
  MenuNameSpan,
  MenuUList,
} from './style';

const Menu = () => {
  const { pathname: currentPath } = useLocation();

  return (
    <MenuBox>
      <ThemeProvider theme={{ currentPath }}>
        <CustomLink to="/">
          <MenuNameSpan>Home</MenuNameSpan>
        </CustomLink>
        <MenuUList>
          <Li>
            <MenuCategorySpan>PUBLIC</MenuCategorySpan>
            <ul>
              <li>
                <CustomLink to="/questions">
                  <EarthSVG />
                  Questions
                </CustomLink>
              </li>
              <IndentedList>
                <CustomLink to="/questions/tags">
                  <MenuNameSpan>Tags</MenuNameSpan>
                </CustomLink>
              </IndentedList>
              <IndentedList>
                <CustomLink to="/questions/users">
                  <MenuNameSpan>Users</MenuNameSpan>
                </CustomLink>
              </IndentedList>
              <IndentedList>
                <CustomLink to="/">
                  <MenuNameSpan>Companies</MenuNameSpan>
                </CustomLink>
              </IndentedList>
            </ul>
          </Li>
        </MenuUList>
      </ThemeProvider>
    </MenuBox>
  );
};

export default Menu;
