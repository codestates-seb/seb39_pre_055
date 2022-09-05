import { useNavigate } from 'react-router-dom';

import SignupInput from '../../../components/SignupInput/SignupInput';
import SignupSideInfo from '../../../components/SignupSideInfo/SignupSideInfo';
import {
  Container,
  CookieInfo,
  CookieLink,
  Footer,
  PrivacyLink,
  ServiceLink,
  SideContainer,
  SignUpContainer,
  UserInputContainer,
} from './style';

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
        <UserInputContainer>
          <SignupInput />
          <CookieInfo>
            <span>By clicking “Sign up”, you agree to our </span>
            <ServiceLink
              onClick={() =>
                window.open(
                  'https://stackoverflow.com/legal/terms-of-service/public',
                  '_blank'
                )
              }
            >
              terms of service
            </ServiceLink>
            <span>, </span>
            <PrivacyLink
              onClick={() =>
                window.open(
                  'https://stackoverflow.com/legal/privacy-policy',
                  '_blank'
                )
              }
            >
              privacy policy
            </PrivacyLink>
            <span> and </span>
            <CookieLink
              onClick={() =>
                window.open(
                  'https://stackoverflow.com/legal/cookie-policy',
                  '_blank'
                )
              }
            >
              cookie policy
            </CookieLink>
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
