import styled from 'styled-components';

import MenuList from './MenuList/MenuList';
import menus from './menuLists';

const SFooter = styled.footer`
  box-sizing: border-box; // FIXME: 삭제 예정
  position: relative;
  display: flex;
  column-gap: 50px;
  bottom: 0px;
  height: 400px;
  width: 100vw;
  background-color: var(--black-800);
  padding: 50px 80px;
`;

const Footer = () => {
  return (
    <SFooter>
      {menus.map(({ upperMenu, to, subMenus }) => (
        <MenuList
          upperMenu={upperMenu}
          to={to}
          subMenus={subMenus}
          key={upperMenu}
        />
      ))}
    </SFooter>
  );
};

export default Footer;
