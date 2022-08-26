import styled, { css } from 'styled-components';

import { RoundButton } from '../../../Button/Templates';

export const Misc = styled.div`
  display: flex;
  column-gap: 5px;
  margin-left: 10px;
`;

export const Hideable = styled(RoundButton)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      display: none;
    }
  `}
`;

export const Products = styled(RoundButton)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      font-size: 0.8rem;
    }
  `}
`;
