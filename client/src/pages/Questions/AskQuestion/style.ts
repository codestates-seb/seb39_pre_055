import styled from 'styled-components';

import { ReactComponent as Robot } from '../../../assets/img/background.svg';

export const SQuestionBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 0px 15px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    column-gap: 0px;
  }
`;

export const STitleHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

export const STitleH1 = styled.h1`
  display: block;
  font-size: 2rem;
  padding: 40px 10px 40px 30px;
  margin-right: auto;
`;

export const SRobotSVG = styled(Robot)`
  width: 600px;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    display: none;
  }
`;

export const SBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  /* flex: 1 0 100%; */
  column-gap: 20px;
`;

export const SCardAside = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  max-height: 80vh;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    display: none;
  }
`;
