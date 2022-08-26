import { Link } from 'react-router-dom';

import { Hamburger } from '../..';
import MiniSearchBar from '../../SearchBar/MiniSearchBar';
import MainAuth from './MainAuthButtons/MainAuthButtons';
import SearchBarBox from './MainSearchBar/MainSearchBar';
import MiscBtns from './MiscButtons/MiscBtns';
import { LogoBox, MainLogoSVG, SHeader, SNav } from './style';

const Nav = () => {
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
        <MainAuth />
      </SNav>
    </SHeader>
  );
};

export default Nav;
