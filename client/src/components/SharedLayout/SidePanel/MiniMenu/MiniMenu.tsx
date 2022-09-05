import { ReactComponent as PromoSVG } from '../../../../assets/img/sidebar-promo.svg';
import Menu from '../Menu/Menu';
import { MiniMenuAside, TeamAdBox } from './style';

interface MiniMenuProps {
  closeMenu: () => void;
}

const MiniMenu = ({ closeMenu }: MiniMenuProps) => {
  return (
    <MiniMenuAside onClick={closeMenu}>
      <Menu />
      <TeamAdBox>
        <strong>Stack Overflow for Teams</strong>– Start collaborating and
        sharing organizational knowledge.
        <PromoSVG />
      </TeamAdBox>
    </MiniMenuAside>
  );
};

export default MiniMenu;
