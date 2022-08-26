import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Hamburger } from '../..';
import MiniSearchBar from '../../SearchBar/MiniSearchBar';
import MainAuth from './MainAuthButtons/MainAuthButtons';
import SearchBarBox from './MainSearchBar/MainSearchBar';
import MiscBtns from './MiscButtons/MiscBtns';
import { LogoBox, MainLogoSVG, SHeader, SNav } from './style';
import UserMenus from './UserToolbar/UserToolbar';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <SHeader>
      <SNav>
        <Hamburger />
        <LogoBox>
          <Link to="/" />
          <MainLogoSVG />
        </LogoBox>
        <MiscBtns />
        <SearchBarBox />
        <MiniSearchBar />
        {isLoggedIn ? <UserMenus /> : <MainAuth />}
      </SNav>
    </SHeader>
  );
};

export default Nav;
