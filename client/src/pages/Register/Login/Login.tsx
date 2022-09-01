import styled from 'styled-components';

import { ReactComponent as Sprites } from '../../../assets/img/sprites.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
`;

const Login = () => {
  return (
    <Container>
      <BottomIconSVG />
    </Container>
  );
};

export default Login;

export const BottomIconSVG = styled(Sprites).attrs({
  viewBox: '0 0 28 50',
})`
  width: 50px;
  height: 60px;
`;
