import styled, { css } from 'styled-components';

export const UpperMenu = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-weight: bold;

  h4 {
    color: var(--black-200);
    margin-bottom: 25px;

    ${({ theme }) => css`
      @media screen and (max-width: ${theme.breakPoints.tablet}) {
        margin-bottom: 10px;
      }
    `}
  }
`;

export const SubMenuList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 12px;
  font-size: 0.85rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      flex-flow: row wrap;
      column-gap: 10px;
    }
  `}
`;

export const SubMenuLi = styled.li`
  a {
    color: var(--black-400);

    &:link,
    &:visited {
      color: var(--black-400);
    }

    &:hover {
      color: var(--black-050);
    }
  }

  ${({ className }) =>
    className === 'API' &&
    css`
      margin-top: 27px;
    `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      width: max-content;
      margin-top: 0px;
    }
  `}
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      flex-flow: column wrap;
    }
  `}
`;
