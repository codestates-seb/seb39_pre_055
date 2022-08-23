import '../../../assets/style/GlobalVariables.css';

import styled from 'styled-components';

import { LogoWrapper, MainLogo, SNav } from './style';

const SButton = styled.button`
  color: var(--black-700);
  background-color: var(--black-025);
  width: 90px;
  height: 35px;
  border-radius: 20px;
  border: 0px;
  transition: 0.6s all;

  &:hover {
    background-color: var(--black-075);
    transition: 0.6s all;
  }
`;

const Nav = () => {
  return (
    <SNav>
      <LogoWrapper>
        <MainLogo />
      </LogoWrapper>
      <SButton>Products</SButton>
    </SNav>
  );
};

export default Nav;
