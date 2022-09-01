import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BlueButton, DefaultInput } from '../../../components';
import Checkbox from '../../../components/Checkbox/Checkbox';
import SignupSideInfo from '../../../components/SignupSideInfo/SignupSideInfo';

interface Prop {
  icon: string;
  text: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  heigt: 1500px;
`;

const SideContainer = styled.span`
  margin: 0px 48px 128px 0px;
  justify-content: center;
  align-items: center;
  width: 411px;
  height: 285px;

  h1 {
    font-size: 27px;
    margin: 0px 0px 32px;
    color: var(--fc-dark);
  }

  @media (max-width: 817px) {
    h1 {
      flex-direction: column;
    }

    @media (max-width: 640px) {
      visibility: hidden;
      }
    }
  }
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 316px;
  height: 934px;
  // border: 1px solid black;
`;

const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  font-size: 15px;
  font-weight: 800;
  width: 316px;
  height: 660px;
  padding: 24px;
  margin-bottom: 24px;
`;

const SocialSignup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 316px;
  height: 137px;
  margin-bottom: 16px;
`;

const GoogleSignup = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  font-size: 13px;
  color: var(--black-800);
  border: 1px solid var(--black-100);
  width: 316px;
  height: 38px;
  margin: 4px 0px;
  padding: 10.4px;

  :hover {
    background-color: var(--black-30);
  }
`;

const GitHubSignup = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-700);
  border-radius: 5px;
  font-size: 13px;
  color: white;
  border: 1px solid var(--black-100);
  width: 316px;
  height: 38px;
  margin: 4px 0px;
  padding: 10.4px;

  :hover {
    background-color: var(--black-800);
  }
`;

const FacebookSignup = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-800);
  border-radius: 5px;
  font-size: 13px;
  color: white;
  border: 1px solid var(--black-100);
  width: 316px;
  height: 38px;
  margin: 4px 0px;
  padding: 10.4px;

  :hover {
    background-color: var(--blue-900);
  }
`;

const CookieInfo = styled.div`
  font-size: 12px;
  line-height: 15.7px;
  font-weight: 400;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 315px;
  height: 78px;
  padding: 16px;
  margin-bottom: 24px;
  font-size: 13px;
  color: var(--black-700);

  a {
    margin-left: 5px;
    color: var(--blue-600);
  }
`;

const Signup = () => {
  return (
    <Container>
      <SideContainer>
        <h1>
          <span>Join Stack Overflow </span>
          <span>community</span>
        </h1>
        <SignupSideInfo icon="icon" text="Get unstuck — ask a question" />
      </SideContainer>
      <SignUpContainer>
        <SocialSignup>
          <GoogleSignup>Sign up with Google</GoogleSignup>
          <GitHubSignup>Sign up with GitHub</GitHubSignup>
          <FacebookSignup>Sign up with Facebook</FacebookSignup>
        </SocialSignup>
        <UserInputContainer>
          <div>Display name</div>
          <div>Email</div>
          <div>password</div>
          <Checkbox />
          <BlueButton width="268px" height="38px">
            Sign up
          </BlueButton>
          <CookieInfo>
            By clicking “Sign up”, you agree to our terms of service, privacy
            policy and cookie policy
          </CookieInfo>
        </UserInputContainer>
        <Footer>
          <div>
            Already have an account?
            <a href="http://localhost:3000/login">Log in</a>
          </div>
        </Footer>
      </SignUpContainer>
    </Container>
  );
};

export default Signup;
