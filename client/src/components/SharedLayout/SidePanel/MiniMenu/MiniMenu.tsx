import { ReactComponent as Promo } from '../../../../assets/img/sidebar-promo.svg';
import Menu from '../Menu/Menu';
import { MiniMenuAside, TeamAd } from './style';

const MiniMenu = () => {
  return (
    <MiniMenuAside>
      <Menu />
      <TeamAd>
        <strong>Stack Overflow for Teams</strong>– Start collaborating and
        sharing organizational knowledge.
        <Promo />
      </TeamAd>
    </MiniMenuAside>
  );
};

export default MiniMenu;
