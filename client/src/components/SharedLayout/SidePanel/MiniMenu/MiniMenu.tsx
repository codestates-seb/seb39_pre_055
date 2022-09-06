import { ReactComponent as PromoSVG } from '../../../../assets/img/sidebar-promo.svg';
import Menu from '../Menu/Menu';
import { MiniMenuAside, STeamLink, SWhyLink, TeamAdBox } from './style';

export const TeamAd = () => {
  return (
    <TeamAdBox>
      <strong>Stack Overflow for Teams</strong>– Start collaborating and sharing
      organizational knowledge.
      <PromoSVG />
      <STeamLink
        href="https://try.stackoverflow.co/why-teams/?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta"
        target="_blank"
        rel="noopener"
      >
        Create a free Team
      </STeamLink>
      <SWhyLink
        href="https://stackoverflow.co/teams/"
        target="_blank"
        rel="noopener"
      >
        Why Teams?
      </SWhyLink>
    </TeamAdBox>
  );
};

interface MiniMenuProps {
  closeMenu: () => void;
}

const MiniMenu = ({ closeMenu }: MiniMenuProps) => {
  return (
    <MiniMenuAside onClick={closeMenu}>
      <Menu />
      <TeamAd />
    </MiniMenuAside>
  );
};

export default MiniMenu;
