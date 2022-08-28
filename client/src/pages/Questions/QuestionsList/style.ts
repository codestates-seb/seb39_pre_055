import styled from 'styled-components';

import { BlueButton } from '../../../components';

export const Container = styled.div`
  border-left: 0.2px solid var(--black-100);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 23px 23px 0px 23px;

  h1 {
    font-size: 27px;
    color: var(--fc-dark);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  padding: 0px 23px 0px 23px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const SortTabs = styled.span`
  display: flex;
  font-size: 16px;
  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.2px solid var(--black-100);
  @media (max-width: 640px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

// 하단페이지네이션탭 예시용
export const Footer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const PagenationButton = styled.span`
  display: flex;
  margin-top: 50px;
  margin-left: 40px;

  button {
    margin: 0.8px;
    font-size: 2px;
  }
`;

export const PerPageButton = styled.span`
  display: flex;
  margin: 50px 0px 0px 180px;

  button {
    margin: 0.8px;
    font-size: 2px;
  }
`;
