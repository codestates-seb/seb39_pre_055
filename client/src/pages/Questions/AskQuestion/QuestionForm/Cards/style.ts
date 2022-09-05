import styled from 'styled-components';

export const SStepOList = styled.ol`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export const SBox = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const SUList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  row-gap: 5px;
  padding: 15px;
`;

export const DefaultList = styled.li`
  list-style: disc;
  margin-left: 20px;
`;

export const SExplaneP = styled.p`
  padding-right: 15px;
  line-height: 1.2rem;
`;

export const SLink = styled.a`
  &:visited,
  &:link {
    color: var(--blue-600);
  }
`;
