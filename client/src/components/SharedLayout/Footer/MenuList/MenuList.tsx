import { Link } from 'react-router-dom';

import { MenuBox, MenuCategoryBox, SubMenuList, SubMenuUList } from './style';

interface SubMenu {
  title: string;
  to: string;
  className?: string;
}

interface BottomMenuBoxProps {
  menuCategories: string;
  to: string;
  subMenus: SubMenu[];
}

const BottomMenuBox = ({
  menuCategories,
  to,
  subMenus,
}: BottomMenuBoxProps) => {
  return (
    <MenuBox>
      <MenuCategoryBox>
        <Link to={to}>
          <h4>{menuCategories}</h4>
        </Link>
      </MenuCategoryBox>
      <SubMenuUList>
        {subMenus.map((link, i) => (
          <SubMenuList key={link.title} className={link.className}>
            <Link to={link.to}>{link.title}</Link>
          </SubMenuList>
        ))}
      </SubMenuUList>
    </MenuBox>
  );
};

export default BottomMenuBox;
