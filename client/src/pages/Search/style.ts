import styled from 'styled-components';

import { Aside, LoadingSpinner } from '../../components';

export const SMainBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

export const SElementSection = styled.section`
  border-left: 0.2px solid var(--black-100);
  width: 100%;
`;

export const SPromoAside = styled(Aside)`
  margin: 30px 30px 30px 0px;
  flex: 0 0 320px;
`;

export const SSPinner = styled(LoadingSpinner)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 60vh;
`;

export const TitleHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  row-gap: 20px;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 24px 16px 0px 16px;

  h1 {
    font-size: 27px;
    color: var(--fc-dark);
  }
`;

export const SKeywordP = styled.p`
  color: var(--black-500);
  font-size: 0.8rem;
  width: 100%;
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
  row-gap: 7px;
  padding: 14px;
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

export const SAdvLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: white;
  margin-left: auto;
  margin-right: 15px;
  color: var(--blue-600);

  &:link,
  &:visited {
    color: var(--blue-600);
  }

  &:hover {
    color: var(--blue-400);
    background-color: white;
  }
`;
