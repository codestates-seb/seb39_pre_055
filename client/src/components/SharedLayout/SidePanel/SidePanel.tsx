import Menu from './Menu/Menu';
import { TeamAd } from './MiniMenu/MiniMenu';
import { MenuAside } from './style';

const SidePanel = () => {
  return (
    <MenuAside>
      <Menu />
      <TeamAd />
    </MenuAside>
  );
};

export default SidePanel;
