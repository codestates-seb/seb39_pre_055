import { Link } from 'react-router-dom';

import { MenuWrapper, SubMenuLi, SubMenuList, UpperMenu } from './style';

interface SubMenu {
  title: string;
  to: string;
  className?: string;
}

interface MenuListProps {
  upperMenu: string;
  to: string;
  subMenus: SubMenu[];
}

const MenuList = ({ upperMenu, to, subMenus }: MenuListProps) => {
  return (
    <MenuWrapper>
      <UpperMenu>
        <Link to={to}>
          <h4>{upperMenu}</h4>
        </Link>
      </UpperMenu>
      <SubMenuList>
        {subMenus.map((link, i) => (
          <SubMenuLi key={link.title} className={link.className}>
            <Link to={link.to}>{link.title}</Link>
          </SubMenuLi>
        ))}
      </SubMenuList>
    </MenuWrapper>
  );
};

export default MenuList;
