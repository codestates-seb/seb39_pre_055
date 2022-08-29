import { Outlet, useLocation } from 'react-router-dom';
import { css } from 'styled-components';

import SidePanel from '../SidePanel/SidePanel';
import { Section, SMain } from './style';

const AskBGColor = css`
  background-color: var(--black-050);
`;

const Main = () => {
  const { pathname } = useLocation();
  const isMain = pathname !== '/questions/ask';

  return (
    <SMain bgColor={isMain || AskBGColor}>
      {isMain && <SidePanel />}
      <Section>
        <Outlet />
      </Section>
    </SMain>
  );
};

export default Main;
