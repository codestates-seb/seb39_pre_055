import styled from 'styled-components';

import { Modal } from '../Modal';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nav from './Nav/Nav';

const Shared = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SharedLayout = () => {
  return (
    <Modal width="200px" height="200px" background={false}>
      <Shared>
        <Nav />
        <Main />
        <Footer />
      </Shared>
    </Modal>
  );
};

export default SharedLayout;
