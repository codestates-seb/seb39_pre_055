import styled, { css } from 'styled-components';

import Menu from './Menu/Menu';

// TODO: Nav 높이 바뀔 때마다 SidePanel, Section 모두 수정해줘야 함
const Aside = styled.aside`
  position: sticky;
  row-gap: 20px;
  top: 50px;
  width: 170px;
  min-width: 170px;
  padding: 10px 0px 10px 10px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoints.mobile}) {
      display: none;
    }
  `}
`;

const SidePanel = () => {
  return (
    <Aside>
      <Menu />
    </Aside>
  );
};

export default SidePanel;
