/* eslint-disable react/no-unescaped-entities */
import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Sprites } from '../../../assets/img/sprites.svg';
import { BlueButton, DefaultInput } from '../../../components';
import { ERROR_MSG_01, ERROR_MSG_03 } from '../../../constants';
import { EMAIL_REGEX } from '../../../utils';

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

export const TextCard = styled.form`
  display: flex;
  gap: 10px;
  font-size: 13px;

  p {
    color: rgb(35, 38, 41);
  }

  span {
    color: #0074cc;

    &:hover {
      color: var(--blue-400);
    }
  }
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 260px;
  padding: 24px;
  margin: 24px 0;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;
const Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (EMAIL_REGEX.test(e.target.value)) {
      setEmailError(false);
    }
    setEmailValue(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) {
      setPasswordError(false);
    }
    setPasswordValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(emailValue) || passwordValue.length < 4) {
      if (!EMAIL_REGEX.test(emailValue)) setEmailError(true);
      if (passwordValue.length < 4) setPasswordError(true);
      return;
    }
    navigate('/');
  };

  return (
    <Container>
      <BottomIconSVG />
      <LoginCard>
        <DefaultInput
          label="Email"
          id="email"
          value={emailValue}
          isError={emailError}
          errorMsg={ERROR_MSG_01}
          onChange={handleChangeEmail}
        />
        <DefaultInput
          type="password"
          label="Password"
          id="password"
          value={passwordValue}
          isError={passwordError}
          errorMsg={ERROR_MSG_03}
          onChange={handleChangePassword}
        />
        <BlueButton height="35px" onClick={handleSubmit}>
          Log in
        </BlueButton>
      </LoginCard>
      <TextCard>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <span>Sign up</span>
        </Link>
      </TextCard>
    </Container>
  );
};

export default Login;
