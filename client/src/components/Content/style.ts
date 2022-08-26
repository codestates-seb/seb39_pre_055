import styled from 'styled-components';

export const MainContents = styled.main`
  display: flex;
  margin-top: 16px;
  border-bottom: 1px solid rgb(227, 230, 232);
`;

export const Votes = styled.aside`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-right: 16px;

  span {
    margin: 20px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: var(--black-500);
  }
`;

export const TextArea = styled.section`
  flex-grow: 1;
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
`;

export const Tags = styled.section`
  margin: 24px 0;
`;

export const Utils = styled.section`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin: 16px 0;
`;
