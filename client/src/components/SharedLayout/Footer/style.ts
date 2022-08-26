import styled, { css } from 'styled-components';

export const SFooter = styled.footer`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  bottom: 0px;
  height: 400px;
  width: 100vw;
  background-color: var(--black-800);
  padding: 50px 70px 50px 30px;

  & > * {
    flex: 1 1 auto;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      height: 500px;
      padding-bottom: 20px;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.mobile}) {
      height: auto;
      min-height: 650px;
    }
  `}
`;

export const BottomNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 40px;
  margin-right: 20px;
  margin-bottom: 30px;
  row-gap: 30px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      flex-flow: column;
      margin-bottom: auto;
    }

    @media screen and (max-width: ${theme.breakPoints.mobile}) {
      margin-bottom: 30px;
    }
  `}
`;

export const BottomIconBox = styled.div`
  flex: 1 0 70px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      height: 50px;
    }

    @media screen and (max-width: ${theme.breakPoints.mobile}) {
      display: none;
    }
  `}
`;
