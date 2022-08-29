import styled, { css } from 'styled-components';

interface SMainProps {
  bgColor: any;
}
export const SMain = styled.main`
  position: relative;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-top: 50px;

  ${({ bgColor }: SMainProps) => bgColor}
`;

// TODO: Nav 높이 바뀔 때마다 SidePanel, Section 모두 수정해줘야 함
export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 420px);
  max-width: 1300px;
  overflow-x: hidden;
`;
