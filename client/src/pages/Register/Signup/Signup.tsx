import { BiLinkExternal } from 'react-icons/bi';

import SignupInput from '../../../components/SignupInput/SignupInput';
import SignupSideInfo from '../../../components/SignupSideInfo/SignupSideInfo';
import {
  Container,
  CookieInfo,
  CookieLink,
  Footer,
  Footer2,
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
        <Footer2>
          <div>
            Are you an employer?
            <a href="https://talent.stackoverflow.com/users/login">
              Sign up on Talent <BiLinkExternal />
            </a>
          </div>
        </Footer2>
      </SignUpContainer>
    </Container>
  );
};

export default Signup;
