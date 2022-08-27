import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const MiscUList = styled.ul`
  display: flex;
  column-gap: 5px;
  margin-left: 10px;
`;

export const MiscLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MiscList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black-700);
  border-radius: 20px;
  width: 80px;
  height: 32px;
  font-size: 0.85rem;
  transition: background-color 0.4s;

  &:hover {
    background-color: var(--black-075);
  }
`;

export const HideableList = styled(MiscList)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      display: none;
    }
  `}
`;

export const Products = styled(MiscList)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      font-size: 0.8rem;
    }
  `}
`;
