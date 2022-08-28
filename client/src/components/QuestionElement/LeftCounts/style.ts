import styled from 'styled-components';

export const Wrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  color: var(--fc-dark);
  margin-top: 17px;
  width: 40px;
  @media (max-width: 640px) {
  }
`;

export const Wrapper2 = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  color: var(--black-500);
  margin-top: 7px;
  width: 70px;
  @media (max-width: 640px) {
    width: 57px;
    margin-top: 17px;
  }
`;

export const Wrapper3 = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  color: var(--black-500);
  margin-top: 7px;
  @media (max-width: 640px) {
    margin-left: 8px;
    margin-top: 17px;
`;

export const Container = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 150px;
  @media (max-width: 640px) {
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 10px;
  }
`;
