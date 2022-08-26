import {
  AchievementSVG,
  CustomLink,
  HelpSVG,
  InboxSVG,
  List,
  MenuUList,
  SwitchSVG,
  UserMenusBox,
} from './style';
import UserIcon from './UserIcon/UserIcon';

const UserMenus = () => {
  return (
    <UserMenusBox>
      <UserIcon />
      <MenuUList>
        <List>
          <CustomLink to="/">
            <InboxSVG />
          </CustomLink>
        </List>
        <List>
          <CustomLink to="/">
            <AchievementSVG />
          </CustomLink>
        </List>
        <List>
          <CustomLink to="/">
            <HelpSVG />
          </CustomLink>
        </List>
        <List>
          <CustomLink to="/">
            <SwitchSVG />
          </CustomLink>
        </List>
      </MenuUList>
    </UserMenusBox>
  );
};

export default UserMenus;
