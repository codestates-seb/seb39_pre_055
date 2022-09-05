import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const MainSearchBox = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  flex: 1 1 300px;

  ${({ theme }) =>
    css`
      @media screen and (max-width: ${theme.breakPoints.mobile}) {
        position: fixed;
        left: 0px;
        top: 50px;
        flex: 1 1 100vw;
        background-color: var(--black-050);
        z-index: 1;
      }
    `}
`;

export const HintsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5px;
  column-gap: 5px;
  width: 100%;
  height: 70%;
  padding: 10px;
`;

export const HintBox = styled.div`
  height: 20px;
`;

export const FontSmall = styled.span`
  font-size: 0.85rem;
`;

export const HintSpan = styled(FontSmall)`
  margin-right: 5px;
`;

export const ExplanationSpan = styled(FontSmall)`
  color: var(--black-400);
`;

export const MiscBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid var(--black-100);
`;

export const AskLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:link,
  &:visited {
    color: inherit;
  }
`;

export const SearchHelpBox = styled.div`
  width: 80px;
  margin-left: auto;
`;

export const SearchHelpLink = styled.a`
  font-size: 0.8rem;

  &:link,
  &:visited {
    color: var(--powder-500);
  }
`;
