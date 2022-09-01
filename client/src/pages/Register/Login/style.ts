import styled from 'styled-components';

import { ReactComponent as Sprites } from '../../../assets/img/sprites.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);
`;
export const BottomIconSVG = styled(Sprites).attrs({
  viewBox: '0 0 28 50',
})`
  width: 50px;
  height: 60px;
`;

export const TextCard = styled.form`
  display: flex;
  gap: 10px;
  font-size: 13px;

  p {
    color: rgb(35, 38, 41);
  }

  span {
    color: #0074cc;

    &:hover {
      color: var(--blue-400);
    }
  }
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 260px;
  padding: 24px;
  margin: 24px 0;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;
