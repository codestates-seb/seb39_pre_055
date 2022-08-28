import styled from 'styled-components';

export const Wrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: var(--fc-dark);
  margin-top: 17px;
  @media (max-width: 640px) {
    margin: 0px 17px 0px 10px;
  }
`;

export const Wrapper2 = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: var(--black-500);
  margin-top: 7px;
  @media (max-width: 640px) {
    width: auto;
    margin-top: 17px;
    margin-right: 15px;
  }
`;

export const Wrapper3 = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: var(--black-500);
  margin-top: 7px;
  @media (max-width: 640px) {
    margin-top: 17px;
`;

export const Container = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 125px;
  @media (max-width: 640px) {
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 10px;
  }
`;
