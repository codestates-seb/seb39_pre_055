import '../../../../assets/style/GlobalVariables.ts';

import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  CustomLinkA,
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
        <CustomLinkA to="/">
          <MenuNameSpan>Home</MenuNameSpan>
        </CustomLinkA>
        <MenuUList>
          <Li>
            <MenuCategorySpan>PUBLIC</MenuCategorySpan>
            <ul>
              <li>
                <CustomLinkA to="/questions">
                  <EarthSVG />
                  Questions
                </CustomLinkA>
              </li>
              <IndentedList>
                <CustomLinkA to="/questions/tags">
                  <MenuNameSpan>Tags</MenuNameSpan>
                </CustomLinkA>
              </IndentedList>
              <IndentedList>
                <CustomLinkA to="/questions/users">
                  <MenuNameSpan>Users</MenuNameSpan>
                </CustomLinkA>
              </IndentedList>
              <IndentedList>
                <CustomLinkA to="/">
                  <MenuNameSpan>Companies</MenuNameSpan>
                </CustomLinkA>
              </IndentedList>
            </ul>
          </Li>
        </MenuUList>
      </ThemeProvider>
    </MenuBox>
  );
};

export default Menu;
