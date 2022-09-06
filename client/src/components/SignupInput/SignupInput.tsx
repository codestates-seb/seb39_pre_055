import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
import RobotCheck from '../RobotCheck/RobotCheck';
import {
  CheckAndSubmit,
  Container,
  DisplayName,
  Email,
  InputPassword,
  Password,
  PasswordComment,
} from './style';

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

  // const submitValues = { displayName, email, password };

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
      <RobotCheck />
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
