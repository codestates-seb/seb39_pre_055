import { Link } from 'react-router-dom';

import MainAuth from '../../Button/MainAuth/MainAuth';
import MiscBtns from './MiscButtons/MiscBtns';
import { LogoWrapper, MainLogo, SHeader, SNav } from './style';

<button type="button">
  <Link to="/login">ddddd</Link>
</button>;

const Nav = () => {
  return (
    <SHeader>
      <SNav>
        <LogoWrapper>
          <MainLogo />
        </LogoWrapper>
        <MiscBtns />
        <MainAuth />
      </SNav>
    </SHeader>
  );
};

export default Nav;
