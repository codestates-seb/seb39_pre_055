import styled from 'styled-components';

import { ReactComponent as Robot } from '../../../assets/img/background.svg';

export const SQuestionBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0px 15px;
  height: 1170px;
`;

export const SHelpAside = styled.aside``;

export const STitleBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const STitleH1 = styled.h1`
  font-size: 2rem;
  padding: 40px 30px;
`;

export const SRobotSVG = styled(Robot)`
  margin-left: auto;
  width: 600px;
`;

export const SBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  max-width: 1600px;
  column-gap: 20px;
`;

export const SCardBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  max-height: 80vh;
`;
