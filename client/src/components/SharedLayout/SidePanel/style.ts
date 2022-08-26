import styled, { css } from 'styled-components';

// TODO: Nav 높이 바뀔 때마다 SidePanel, Section 모두 수정해줘야 함
export const MenuAside = styled.aside`
  position: sticky;
  row-gap: 20px;
  top: 50px;
  width: 170px;
  min-width: 170px;
  padding-top: 15px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.mobile}) {
      display: none;
    }
  `}
`;
