import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StMenu = styled.div`
  position: sticky;
  display: flex;
  flex-flow: column nowrap;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  overflow-x: hidden;
  color: var(--black-500);
`;

export const Li = styled.li`
  padding-top: 10px;

  span {
    display: inline-block;
    font-size: 0.7rem;
    margin: 10px 0px;
  }
`;

interface Path {
  currentPath: string;
}

interface LinkProps {
  to: string;
  theme: Path;
}

export const CutstomLink = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 40px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.4s all;

  &:link,
  &:visited {
    color: var(--black-500);
  }

  & > svg {
    margin: 5px;
  }

  &:hover {
    background-color: var(--black-050);
    color: var(--black-900);
    transition: 0.4s all;
  }

  &:nth-child(n + 3) {
    padding-left: 25px;
  }

  ${({ to, theme }: LinkProps) =>
    to === theme.currentPath &&
    css`
      background-color: var(--black-050);

      &::after {
        display: block;
        position: absolute;
        right: 0%;
        content: '';
        width: 3px;
        height: 100%;
        background-color: var(--orange-400);
      }
    `}
`;

export const IndentedLi = styled.li`
  a {
    padding-left: 25px;
  }
`;
