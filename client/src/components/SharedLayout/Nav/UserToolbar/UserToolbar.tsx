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
import UserProfile from './UserProfile/UserProfile';

const UserMenus = () => {
  return (
    <UserMenusBox>
      <UserProfile />
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
