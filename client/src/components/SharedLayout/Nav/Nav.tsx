import { Dispatch, RefObject, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../redux';
import { Hamburger } from '../..';
import MainAuth from './MainAuthButtons/MainAuthButtons';
import SearchBarBox from './MainSearchBar/MainSearchBar';
import MiniSearchIcon from './MiniSearchBox/MiniSearchIcon';
import MiscLinks from './MiscLinks/MiscLinks';
import { LogoBox, MainLogoSVG, SHeader, SNav } from './style';
import UserMenus from './UserToolbar/UserToolbar';

interface NavProps {
  setFloatSearch: Dispatch<SetStateAction<boolean>>;
  searchInput: RefObject<HTMLInputElement>;
}

const Nav = ({ setFloatSearch, searchInput }: NavProps) => {
  const isLoggedIn = !!useAppSelector((state) => state.user.user);

  return (
    <SHeader>
      <SNav>
        <Hamburger />
        <LogoBox>
          <Link to="/" />
          <MainLogoSVG />
        </LogoBox>
        <MiscLinks />
        <SearchBarBox />
        <MiniSearchIcon
          setFloatSearch={setFloatSearch}
          searchInput={searchInput}
        />
        {isLoggedIn ? <UserMenus /> : <MainAuth />}
      </SNav>
    </SHeader>
  );
};

export default Nav;
