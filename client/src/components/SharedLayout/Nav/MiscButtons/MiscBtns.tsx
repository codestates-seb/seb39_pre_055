import styled, { css } from 'styled-components';

import { Theme } from '../../../../types/globalStyle';
import { RoundButton } from '../../../Button/Templates';
import { Misc } from './style';

type HidableProps = {
  isLoggedIn?: boolean;
} & Theme;

const Hideable = styled(RoundButton)`
  ${({ theme, isLoggedIn }: HidableProps) => css`
    display: ${isLoggedIn ? 'none' : ''};

    @media screen and (max-width: ${theme.breakPoints.tablet}) {
      display: none;
    }
  `}
`;

const MiscBtns = () => {
  return (
    // TODO: 로그인 상태에 따라 안 보이게 설정
    <Misc>
      <Hideable color="black" mainCode="025" hoverCode="075">
        About
      </Hideable>
      <RoundButton color="black" mainCode="025" hoverCode="075">
        Products
      </RoundButton>
      <Hideable color="black" mainCode="025" hoverCode="075">
        For Teams
      </Hideable>
    </Misc>
  );
};

export default MiscBtns;
