import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  height: auto;
  width: 100%;
`;

export const STitleLink = styled(Link)`
  margin-bottom: 5px;
  font-size: 17px;
  line-height: 1.4rem;
  color: var(--blue-600);

  &:link,
  &:visited {
    color: var(--blue-600);
  }

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const STextP = styled.p`
  font-size: 14px;
  color: var(--black-700);
  margin-bottom: 8px;
  padding-right: 23px;
  line-height: 1.3rem;
  max-height: 43px;
  width: calc(100%);
  overflow: hidden;
  word-break: break-all;

  @media (max-width: 640px) {
    font-size: 0.83rem;
    line-height: 1.1rem;
    max-height: 36px;
  }
`;

export const ContentFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 23px;
`;

export const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: 1px;

  @media (max-width: 640px) {
    margin-bottom: 5px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 12px;
  justify-content: space-between;
  column-gap: 6px;
  flex-wrap: wrap;
  padding-top: 4px;
  padding-left: 5px;

  img {
    border-radius: 30%;
  }

  @media (max-width: 640px) {
  }
`;

export const UserName = styled.div`
  color: var(--blue-600);
  width: auto;
`;

export const UserAsked = styled.div`
  color: var(--black-600);
`;
