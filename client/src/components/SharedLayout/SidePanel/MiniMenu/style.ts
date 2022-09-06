import styled from 'styled-components';

import { BlueButton } from '../../../Button/Templates';

export const MiniMenuAside = styled.aside`
  padding-top: 10px;
`;

export const TeamAdBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: stretch;
  align-items: center;
  row-gap: 10px;
  font-size: 0.8rem;
  color: var(--black-600);
  height: 270px;
  margin-top: 15px;
  padding: 0px 10px;

  strong {
    font-weight: bold;
  }
`;

export const STeamLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: max-content;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  background-color: hsl(27, 90%, 55%);
  font-size: 0.75rem;

  &:link,
  &:visited {
    background-color: hsl(27, 90%, 55%);
    color: white;
  }

  &:hover {
    background-color: hsl(27, 100%, 60%);
  }
`;

export const SWhyLink = styled(STeamLink)`
  background-color: white;
  font-size: 0.75rem;
  color: var(--black-600);
  margin-top: -7px;
  width: 123px;

  &:link,
  &:visited {
    background-color: white;
    color: var(--black-600);
  }

  &:hover {
    background-color: var(--black-050);
  }
`;
