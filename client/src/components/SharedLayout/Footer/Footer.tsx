import CopyrightsBox from './Copyrights/Copyrights';
import MenuList from './MenuList/MenuList';
import menus from './menuLists';
import {
  BottomIconBox,
  BottomIconSVG,
  BottomNav,
  SFooter,
  SFooterBox,
} from './style';

const Footer = () => {
  return (
    <SFooter>
      <SFooterBox>
        <BottomIconBox>
          <BottomIconSVG />
        </BottomIconBox>
        <BottomNav>
          {menus.map(({ menuCategory, to, subMenus }) => (
            <MenuList
              menuCategories={menuCategory}
              to={to}
              subMenus={subMenus}
              key={menuCategory}
            />
          ))}
        </BottomNav>
        <CopyrightsBox />
      </SFooterBox>
    </SFooter>
  );
};

export default Footer;
