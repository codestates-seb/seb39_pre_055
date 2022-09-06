import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
`;

export const DisplayName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  font: . 9rem 'Fira Sans', sans-serif;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

export const InputPassword = styled.div`
  type: "password";
  id: "pass";
  name: "password";
  minlength: 8; 
  required;
`;

export const PasswordComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 15.7px;
  font-size: 12px;
  font-weight: 400;
  margin: 4px 0px;
  color: var(--black-500);
`;

export const CheckAndSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    margin: 10px 0px 5px 0px;
  }
`;
