import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Achievement } from '../../../../assets/img/nav-achievement.svg';
import { ReactComponent as Help } from '../../../../assets/img/nav-help.svg';
import { ReactComponent as Inbox } from '../../../../assets/img/nav-inbox.svg';
import { ReactComponent as Switch } from '../../../../assets/img/nav-switch.svg';

export const UserMenusBox = styled.div`
  display: flex;
  width: 220px;
  height: 100%;
`;

export const MenuUList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 2px;
`;

export const List = styled.li`
  width: 35px;
  height: 35px;
`;

export const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const InboxSVG = styled(Inbox)`
  fill: var(--black-600);
  width: 60%;
  height: 60%;
`;
export const AchievementSVG = styled(Achievement)`
  fill: var(--black-600);
  width: 60%;
  height: 60%;
`;
export const HelpSVG = styled(Help)`
  fill: var(--black-600);
  width: 60%;
  height: 60%;
`;
export const SwitchSVG = styled(Switch)`
  fill: var(--black-600);
  width: 60%;
  height: 60%;
`;
