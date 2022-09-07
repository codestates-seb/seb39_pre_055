import { RiEarthLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const MenuBox = styled.div`
  position: sticky;
  display: flex;
  flex-flow: column nowrap;
`;

export const MenuUList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  overflow-x: hidden;
  color: var(--black-500);
  margin-bottom: 15px;
`;

export const Li = styled.li`
  padding-top: 10px;
`;

interface Path {
  currentPath: string;
}

interface LinkProps {
  to: string;
  theme: Path;
}

export const EarthSVG = styled(RiEarthLine)`
  margin: 5px;
`;

export const CustomLink = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: stretch;
  width: 100%;
  height: 40px;
  text-decoration: none;
  font-size: 0.9rem;
  padding-left: 10px;
  transition: 0.4s all;

  &:link,
  &:visited {
    color: var(--black-500);
  }

  &:hover {
    background-color: var(--black-050);
    color: var(--black-900);
    transition: 0.4s all;
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

export const IndentedList = styled.li`
  a {
    padding-left: 35px;
  }
`;

export const MenuCategorySpan = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  margin: 10px 0px;
  padding-left: 10px;
`;

export const MenuNameSpan = styled.span`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
`;
