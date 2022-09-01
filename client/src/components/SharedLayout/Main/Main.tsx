import { Outlet } from 'react-router-dom';
import { css } from 'styled-components';

import { Modal } from '../../Modal';
import SidePanel from '../SidePanel/SidePanel';
import { Section, SMain } from './style';

const AskBGColor = css`
  background-color: var(--black-050);
`;

interface MainProps {
  asideHide: boolean;
}

const Main = ({ asideHide }: MainProps) => {
  return (
    <Modal
      width="450px"
      height="435px"
      position={{ x: '50%', y: '50%' }}
      background
    >
      <SMain bgColor={!asideHide || AskBGColor}>
        {!asideHide && <SidePanel />}
        <Section>
          <Outlet />
        </Section>
      </SMain>
    </Modal>
  );
};

export default Main;
