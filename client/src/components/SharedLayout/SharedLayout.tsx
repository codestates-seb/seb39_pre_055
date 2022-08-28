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
    <Shared>
      <Nav />
      <Main />
      <Footer />
    </Shared>
  );
};

export default SharedLayout;
