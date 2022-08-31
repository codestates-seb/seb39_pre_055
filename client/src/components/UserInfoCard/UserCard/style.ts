import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  padding: 7px;
  background-color: #d8eaf6;
  border-radius: 5px;

  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  color: #6a737c;
`;

export const Name = styled.span`
  color: #0074cc;
  font-size: 15px;
`;

export const Location = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

export const Reputation = styled.span`
  font-weight: 900;
`;

type TBadge = 'gold' | 'silver' | 'bronze';

export const Badge = styled.div<{ type: TBadge }>`
  display: flex;
  gap: 5px;

  div {
    width: 6px;
    height: 6px;
    margin-top: 2px;
    border-radius: 50%;
    background-color: #fbcb0d;

    ${({ type }) =>
      type === 'gold' &&
      css`
        background-color: #fbcb0d;
      `}

    ${({ type }) =>
      type === 'silver' &&
      css`
        background-color: #b5b7bc;
      `}

      ${({ type }) =>
      type === 'bronze' &&
      css`
        background-color: #d0a685;
      `}
  }
`;
