import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  EMAIL_REGEX,
  ERROR_MSG_06,
  ERROR_MSG_07,
  ERROR_MSG_08,
} from '../../constants';
import { registerUser, useAppDispatch, useAppSelector } from '../../redux';
import { BlueButton } from '../Button/Templates';
import Checkbox from '../Checkbox/Checkbox';
import DefaultInput from '../Input/DefaultInput/DefaultInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
`;

const DisplayName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  font: . 9rem 'Fira Sans', sans-serif;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

const InputPassword = styled.div`
  type: "password";
  id: "pass";
  name: "password";
  minlength: 8; 
  required;
`;

const PasswordComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 15.7px;
  font-size: 12px;
  font-weight: 400;
  margin: 4px 0px;
  color: var(--black-500);
`;

const CheckAndSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    margin: 60px 0px 5px 0px;
  }
`;

const SignupInput = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);
  const dispatch = useAppDispatch();
  const { isSignupDone } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignupDone) {
      navigate('/login');
    }
  }, [navigate, isSignupDone]);

  const handleDisplayNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (EMAIL_REGEX.test(e.target.value)) {
      setEmailErr(false);
    }
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordInput = e.target.value;
    if (passwordInput.length >= 8) {
      setPasswordErr(false);
    }
    setPassword(e.target.value);
  };

  const submitValues = { displayName, email, password };

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(email) || password.length < 8) {
      if (!EMAIL_REGEX.test(email)) setEmailErr(true);
      if (password.length < 8) setPasswordErr(true);
      return;
    }
    dispatch(
      registerUser({
        displayName,
        email,
        password,
      })
    );
  };

  return (
    <Container>
      <DisplayName>
        <div>Display name</div>
        <DefaultInput
          id="displayName"
          value={displayName}
          onChange={handleDisplayNameChange}
          errorMsg={ERROR_MSG_06}
          isError={false}
        />
      </DisplayName>
      <Email>
        <div>Email</div>
        <DefaultInput
          id="email"
          value={email}
          onChange={handleEmailChange}
          errorMsg={ERROR_MSG_07}
          isError={emailErr}
        />
      </Email>
      <Password>
        <div>password</div>
        <InputPassword>
          <DefaultInput
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            errorMsg={ERROR_MSG_08}
            isError={passwordErr}
          />
        </InputPassword>
        <PasswordComment>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </PasswordComment>
      </Password>
      <CheckAndSubmit>
        <Checkbox />
        <div>
          <BlueButton width="268px" height="38px" onClick={handleSubmit}>
            Sign up
          </BlueButton>
        </div>
      </CheckAndSubmit>
    </Container>
  );
};

export default SignupInput;
