import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  nav {
    position: fix;
    height: 50px;
    border: 4px solid black;
  }

  section {
    height: 1500px;
  }

  footer {
    position: fix;
    bottom: 0;
    height: 100px;
    border: 4px solid black;
  }
`;

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>nav</nav>
      <section>
        <Outlet />
      </section>
      <footer>footer</footer>
    </Wrapper>
  );
};

export default SharedLayout;
