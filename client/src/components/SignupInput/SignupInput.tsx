import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import { ERROR_MSG_06, ERROR_MSG_07, ERROR_MSG_08 } from '../../constants';
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
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
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

const SignupInput = () => {
  const [displayName, setDisplayName] = useState({ value: '', isError: false });
  const [email, setEmail] = useState({ value: '', isError: false });
  const [password, setPassword] = useState({ value: '', isError: false });
  const isIncludeAlhabet = (s: string) => /[a-zA-Z]/g.test(s);
  const isIncludeNumber = (s: string) => /\d/g.test(s);

  const handleDisplayNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let error = false;

      if (displayName.value === email.value) {
        error = true;
      }
      setDisplayName({ value: e.target.value, isError: error });
    },
    [displayName]
  );

  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let error = false;
      if (!email.value.includes('@' || '.com')) {
        setEmail({ value: e.target.value, isError: error });
        error = true;
      } else {
        setEmail({ value: e.target.value, isError: error });
      }
    },
    [email]
  );

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let error = false;
      const passwordInput = e.target.value;
      for (let i = 0; i < passwordInput.length; i += 1) {
        if (
          passwordInput.length < 8 ||
          !isIncludeAlhabet(passwordInput) ||
          !isIncludeNumber(passwordInput)
        ) {
          setPassword({ value: e.target.value, isError: error });
          error = true;
        } else {
          setPassword({ value: e.target.value, isError: error });
        }
      }
    },
    [password]
  );

  return (
    <Container>
      <DisplayName>
        <div>Display name</div>
        <DefaultInput
          id="displayName"
          value={displayName.value}
          onChange={handleDisplayNameChange}
          errorMsg={ERROR_MSG_06}
          isError={displayName.isError}
        />
      </DisplayName>
      <Email>
        <div>Email</div>
        <DefaultInput
          id="email"
          value={email.value}
          onChange={handleEmailChange}
          errorMsg={ERROR_MSG_07}
          isError={email.isError}
        />
      </Email>
      <Password>
        <div>password</div>
        <DefaultInput
          id="password"
          value={password.value}
          onChange={handlePasswordChange}
          errorMsg={ERROR_MSG_08}
          isError={password.isError}
        />
        <PasswordComment>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </PasswordComment>
      </Password>
    </Container>
  );
};

export default SignupInput;
