import styled from 'styled-components';

import { Aside } from '../../../components';

export const SMainBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const SElementSection = styled.section`
  border-left: 0.2px solid var(--black-100);
`;

export const SPromoAside = styled(Aside)`
  margin: 30px 30px 30px 0px;
  flex: 0 0 320px;
`;

export const TitleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 24px 16px 0px 16px;

  h1 {
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

export const SortTabs = styled.div`
  display: flex;
  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;

export const MainUList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  padding: 16px;
  padding: 0px 0px 5px 0px;

  @media (max-width: 640px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const SQuestionList = styled.li`
  display: flex;
  flex-flow: row nowrap;
  row-gap: 7px;
  padding: 14px;
  width: 100%;
  border-top: 0.2px solid var(--black-100);

  @media (max-width: 640px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

// 하단페이지네이션탭
export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  min-height: 150px;
  padding-right: 24px;
  padding-bottom: 100px;
  @media (max-width: 640px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const PagenationButton = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 40px;

  @media (max-width: 640px) {
    margin-left: 24px;
  }
`;

export const PerPageButton = styled.div`
  display: flex;
  margin: 50px 39px 0px 180px;
`;
