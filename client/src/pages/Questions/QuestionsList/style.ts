import styled from 'styled-components';

import { BlueButton } from '../../../components';

export const Container = styled.div`
  border-left: 0.2px solid var(--black-100);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 24px 16px 0px 16px;

  h1 {
    font-number: 200;
    font-size: 27px;
    color: var(--fc-dark);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  padding: 0px 16px 0px 16px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const SortTabs = styled.span`
  display: flex;
  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.2px solid var(--black-100);
  padding: 16px;
  @media (max-width: 640px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

// 하단페이지네이션탭 예시용
export const Footer = styled.span`
  display: flex;
  justify-content: space-between;
  min-height: 150px;
  align-items: flex-start;
  padding-bottom: 200px;
  @media (max-width: 640px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const PagenationButton = styled.span`
  display: flex;
  margin-top: 50px;
  margin-left: 40px;

  button {
    margin: 0.8px;
    font-size: 2px;
  }
  @media (max-width: 640px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

// export const PageButton = styled.button`
//   min-widht: 24px;
//   min-height: 27px;
// `;

// export const PageUnitButton = styled.button`
//   min-widht: 24px;
//   min-height: 50px;
// `;

export const PerPageButton = styled.span`
  display: flex;
  margin: 50px 0px 0px 180px;

  button {
    margin: 0.8px;
    font-size: 2px;
  }
`;
