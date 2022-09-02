import styled from 'styled-components';

export const SMain = styled.div`
  display: flex;
  width: 100%;

  & > section {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
  border-left: 1px solid rgb(227, 230, 232);

  h3 {
    font-size: 19px;
    color: #232629;
    margin: 20px 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h1 {
    flex-basis: 85%;
    font-size: 27px;
    color: var(--black-700);
    word-break: break-all;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column-reverse;

    & > div {
      height: 35px;
      margin-bottom: 10px;
    }

    button {
      margin-left: auto;
    }
  }
`;

export const SubHeader = styled.section`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--black-100);

  div {
    margin-bottom: 8px;
    margin-right: 16px;
    font-size: 13px;
  }

  span {
    margin-right: 2px;
    color: var(--black-500);
  }

  strong {
    color: var(--black-800);
  }
`;

export const AnswerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  color: #232629;

  h2 {
    display: flex;
    align-items: center;
    font-size: 19px;
    color: #232629;
  }

  label {
    font-size: 12px;
  }

  select {
    width: 260px;
    padding: 6px 32px 6px 9px;
    margin-left: 3px;
    color: #0c0e0d;
    font-size: 13px;
    border-radius: 3px;

    &:focus {
      border-color: var(--blue-300);
      outline: var(--blue-100) solid 4px;
    }
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  padding: 10px;
  font-size: 13px;
  color: white;
  background-color: #0a95ff;
  border: none;
  border-radius: 3px;
`;
