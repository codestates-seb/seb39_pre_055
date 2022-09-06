import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: calc(100vh - 50px);
`;

export const SideContainer = styled.span`
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

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 316px;
  height: 934px;
`;

export const UserInputContainer = styled.div`
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
  margin-bottom: 45px;
`;

export const CookieInfo = styled.div`
  font-size: 12px;
  line-height: 15.7px;
  font-weight: 500;
  color: var(--black-500);
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 7px;
  font-size: 13px;
  color: var(--black-700);

  & > div > a {
    margin-left: 5px;
    color: var(--blue-600);
    &:hover {
      color: var(--blue-400);
    }
  }
`;

export const Footer2 = styled.div`
  font-size: 13px;
  color: var(--black-700);

  & > div > a {
    margin-left: 5px;
    color: var(--blue-600);
    &:hover {
      color: var(--blue-400);
    }
  }
`;

export const ServiceLink = styled.a`
  color: var(--blue-600);
  &:hover {
    color: var(--blue-400);
  }
`;

export const PrivacyLink = styled.a`
  color: var(--blue-600);
  &:hover {
    color: var(--blue-400);
  }
`;

export const CookieLink = styled.a`
  color: var(--blue-600);
  &:hover {
    color: var(--blue-400);
  }
`;
