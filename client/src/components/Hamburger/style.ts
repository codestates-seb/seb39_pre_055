import styled, { css } from 'styled-components';

export const HamburgerBox = styled.div`
  flex: 0 0 36px;
  display: none;
  padding-top: 2px;

  ${({ theme }) =>
    css`
      @media screen and (max-width: ${theme.breakPoints.mobile}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 100%;
      }
    `}
`;

export const PattyBox = styled.button`
  position: relative;
  width: 25px;
  height: 18px;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 0px;
  padding: 0px;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0);
`;

export const Patty = styled.span`
  display: block;
  position: relative;
  width: 70%;
  height: 2px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--black-600);
  transition: 0.4s all;

  &:nth-child(1) {
    transform-origin: 0 0;
  }

  &:nth-child(2) {
    margin-top: 3px;
    margin-bottom: 3px;
  }

  &:nth-child(3) {
    transform-origin: 0 100%;
  }

  ${({ theme }) =>
    theme.clicked &&
    css`
      &:nth-child(1) {
        transform: translate(-50%, 0%) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translate(-50%, 80%) rotate(-45deg);
      }
    `}
`;
