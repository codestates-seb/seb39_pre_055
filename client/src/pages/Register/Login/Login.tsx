import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Sprites } from '../../../assets/img/sprites.svg';
import { BlueButton, DefaultInput } from '../../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);
`;

export const BottomIconSVG = styled(Sprites).attrs({
  viewBox: '0 0 28 50',
})`
  width: 50px;
  height: 60px;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 245px;
  padding: 24px;
  margin: 24px 0;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

const Login = () => {
  const [email, setEmail] = useState({
    value: '',
    isError: false,
  });
  const [password, setPassword] = useState({
    value: '',
    isError: false,
  });

  return (
    <Container>
      <BottomIconSVG />
      <LoginCard>
        <DefaultInput
          label="Email"
          id="email"
          value={email.value}
          isError={email.isError}
          onChange={(e) => console.log(e.target.value)}
        />
        <DefaultInput
          label="Password"
          id="password"
          value={password.value}
          isError={password.isError}
          onChange={(e) => console.log(e.target.value)}
        />
        <BlueButton height="35px">Log in</BlueButton>
      </LoginCard>
    </Container>
  );
};

export default Login;
