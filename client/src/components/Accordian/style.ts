import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { ReactComponent as ArrowDown } from '../../assets/img/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../assets/img/arrow-up.svg';
import { GuidelineCardProps } from './Accordion';

interface ExtraStyles {
  extraStyles?: FlattenSimpleInterpolation;
}

export const SCardBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 320px;
  background-color: white;
  box-shadow: 0px 0px 3px grey;
  border-radius: 3px;

  ${({ extraStyles }: ExtraStyles) => extraStyles}
`;

export const STitleBox = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  padding: 12px;
  background-color: var(--black-025);
  border-bottom: 1px solid var(--black-075);

  ${({ extraStyles }: ExtraStyles) => extraStyles}
`;

export const STitleH3 = styled.h3`
  display: block;
  width: 100%;
  color: var(--black-500);

  ${({ extraStyles }: ExtraStyles) => extraStyles}
`;

interface STitleButtonProps {
  bgColor?: string;
  padding?: string;
  extraStyles?: FlattenSimpleInterpolation;
}

export const STitleButton = styled.button`
  display: flex;
  justify-content: start;
  width: 100%;
  height: max-content;
  color: var(--black-500);
  font-size: 1rem;
  border: 0px;
  padding: 0px;
  background-color: inherit;

  ${({ bgColor, padding, extraStyles }: STitleButtonProps) => css`
    background-color: ${bgColor || 'inherit'};
    padding: ${padding};

    ${extraStyles}
  `}
`;

export const ArrowUpSVG = styled(ArrowUp)`
  margin-left: auto;
`;

export const ArrowDownSVG = styled(ArrowDown)`
  margin-left: auto;
`;

export const SContentsBox = styled.div`
  overflow: hidden;

  transition: all 400ms;
  ${({ isCollapsable }: Pick<GuidelineCardProps, 'isCollapsable'>) => css`
    height: ${isCollapsable ? '0px' : 'auto'};
  `}
`;

export const SContentBox = styled.div`
  font-size: 0.85rem;
  line-height: 1.1rem;
`;

export const SContentP = styled.p`
  padding: 15px 15px 15px 20px;
  color: var(--black-800);

  ${({ extraStyles }: ExtraStyles) => extraStyles}
`;
