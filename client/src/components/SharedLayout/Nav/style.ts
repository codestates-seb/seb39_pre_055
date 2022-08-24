import '../../../assets/style/GlobalVariables.ts';

import styled from 'styled-components';

import { ReactComponent as Sprites } from '../../../assets/img/sprites.svg';

export const SHeader = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background-color: var(--black-025);
  box-shadow: 0px 1px 2px var(--black-100);
  z-index: 2;

  &::before {
    display: block;
    position: absolute;
    top: 0%;
    content: '';
    width: 100%;
    height: 3px;
    background-color: var(--orange-400);
  }
`;

export const SNav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  height: 50px;
`;

export const LogoWrapper = styled.div`
  margin-left: 15px;
  margin-top: 3px;
  width: 150px;
  height: 40px;
`;

export const MainLogo = styled(Sprites)`
  position: relative;
  left: 1%;
  top: -1244%; // TODO: 더 좋은 방법?
`;