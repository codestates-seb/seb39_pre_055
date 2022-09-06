import styled, { css } from 'styled-components';

import { SubMenuList, SubMenuUList } from '../MenuList/style';

export const MiscBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 200px;
  row-gap: 15px;
  max-width: 300px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      margin-top: 40px;
      min-height: 40px;
      max-width: 100%;
    }
  `}
`;

export const StSocialsUList = styled(SubMenuUList)`
  width: 100%;
  height: 20px;
  height: fit-content;
  flex-flow: row wrap;
  column-gap: 5px;
  font-size: 0.8rem;
`;

export const SocialsList = styled(SubMenuList)`
  margin-bottom: auto;

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
  height: fit-content;
`;
