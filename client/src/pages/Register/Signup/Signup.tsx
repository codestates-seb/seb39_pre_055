import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SignupInput from '../../../components/SignupInput/SignupInput';
import SignupSideInfo from '../../../components/SignupSideInfo/SignupSideInfo';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: calc(100vh - 50px);
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

    @media (max-width: 817px) {
      display: none;
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

const CookieInfo = styled.div`
  font-size: 12px;
  line-height: 15.7px;
  font-weight: 500;
  color: var(--black-500);
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

  & > div > a {
    margin-left: 5px;
    color: var(--blue-600);
  }
`;

const ServiceLink = styled.span`
  color: var(--blue-600);
`;

const PrivacyLink = styled.span`
  color: var(--blue-600);
`;

const CookieLink = styled.span`
  color: var(--blue-600);
`;

const Signup = () => {
  const navigate = useNavigate();

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
