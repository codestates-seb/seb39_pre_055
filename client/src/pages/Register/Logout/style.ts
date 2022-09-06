import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  max-width: 480px;
  margin-bottom: 24px;
  color: rgb(35, 38, 41);
  font-size: 21px;
  line-height: 30px;

  & > p {
    text-align: center;
  }
`;

export const LogoutCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 24px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

  & > p {
    margin-top: 32px;
    color: #6a737c;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const LinkList = styled.ul`
  padding-bottom: 8px;
  border-bottom: 1px solid var(--black-200);

  li {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 7px;

    & > img {
      width: 20px;
      height: 20px;
    }

    & > a {
      color: #0074cc;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 15px 0;
  color: #0c0d0e;
  font-size: 12px;

  & > label {
    margin-top: 3.5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;

  & > button:last-child {
    padding: 10px;
    border: none;
    color: rgb(0, 116, 204);
    background-color: inherit;
  }

  & > button:last-child:hover {
    background-color: var(--blue-050);
  }
`;
