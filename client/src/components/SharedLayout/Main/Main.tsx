import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SidePanel from '../SidePanel/SidePanel';

// TODO: Nav 높이 바뀔 때마다 SidePanel, Section 모두 수정해줘야 함
const Section = styled.section`
  position: relative;
  top: 50px;
  width: 100%;
  max-width: 900px;
  /* background-color: aliceblue; */
  overflow-x: hidden;
`;

const SMain = styled.main`
  position: relative;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-bottom: 50px; // TODO: margin 말고 다른 방법으로 높이 맞추는 방법?
`;

const Main = () => {
  return (
    <SMain>
      <SidePanel />
      <Section>
        <Outlet />
      </Section>
    </SMain>
  );
};

export default Main;
