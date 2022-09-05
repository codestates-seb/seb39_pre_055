import styled, { css } from 'styled-components';

import { ReactComponent as BottomIcon } from '../../../assets/img/sprites.svg';

export const SFooter = styled.footer`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  bottom: 0px;
  width: 100vw;
  background-color: var(--black-800);
  padding: 40px 30px 40px 30px;

  & > * {
    flex: 1 1 auto;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      height: max-content;
      padding-bottom: 20px;
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
      min-height: 300px;
    }
  `}
`;

export const BottomIconBox = styled.div`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      width: 60px;
      height: 70px;
    }

    @media screen and (max-width: ${theme.breakPoints.mobile}) {
      display: none;
    }
  `}
`;

export const BottomIconSVG = styled(BottomIcon).attrs({
  viewBox: '0 0 40 50',
})`
  width: 50px;
  height: 60px;
`;
