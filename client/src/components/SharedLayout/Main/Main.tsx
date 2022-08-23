import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SidePanel from '../SidePanel/SidePanel';

// TODO: Nav 높이 바뀔 때마다 SidePanel, Section 모두 수정해줘야 함
const Section = styled.section`
  position: relative;
  top: 50px;
  width: calc(100vw - 170px);
  height: 400vh; // 컨텐츠 높이에 맞게 수정할 수 있도록
  background-color: aliceblue;
  padding: 25px;
  padding-right: 100px;
  overflow-x: hidden;
`;

const SMain = styled.main`
  position: relative;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
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
