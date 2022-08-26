import styled, { css } from 'styled-components';

import { SubMenuList, SubMenuUList } from '../MenuList/style';

export const StSocialsUList = styled(SubMenuUList)`
  width: 100%;
  height: 20px;
  flex-flow: row wrap;
  /* justify-content: start; */
  column-gap: 5px;
  font-size: 0.8rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      /* flex-flow: column wrap; */
    }
  `}
`;

export const SocialsList = styled(SubMenuList)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      flex-flow: column wrap;
    }
  `}
`;

export const SLicenseP = styled.p`
  display: flex;
  align-items: flex-end;
  width: 100%;
  font-size: 0.7rem;
  line-height: 1rem;
  color: var(--black-400);
`;

export const MiscBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 200px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      height: 30px;
      width: 100%;
    }
  `}
`;
