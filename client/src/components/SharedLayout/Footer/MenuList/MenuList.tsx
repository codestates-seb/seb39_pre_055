import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SubMenu {
  title: string;
  to: string;
}

interface MenuListProps {
  upperMenu: string;
  to: string;
  subMenus: SubMenu[];
}

const UpperMenu = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-weight: bold;

  h4 {
    color: var(--black-200);
    margin-bottom: 25px;
  }
`;

const SubMenuList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 12px;
  font-size: 0.85rem;
`;

const SubMenuLi = styled.li`
  a {
    color: var(--black-300);
  }
`;

const MenuList = ({ upperMenu, to, subMenus }: MenuListProps) => {
  return (
    <div>
      <UpperMenu>
        <Link to={to}>
          <h4>{upperMenu}</h4>
        </Link>
      </UpperMenu>
      <SubMenuList>
        {subMenus.map((link, i) => (
          <SubMenuLi key={link.title}>
            <Link to={link.to}>{link.title}</Link>
          </SubMenuLi>
        ))}
      </SubMenuList>
    </div>
  );
};

export default MenuList;
