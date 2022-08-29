import styled from 'styled-components';

import { CaptionProps } from './MDCaptions';

export const SCaptionBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 10px;
  margin-top: 6px;
  margin-bottom: 30px;
`;

export const SCaption = styled.span`
  font-size: 0.8rem;
  color: var(--black-500);

  ${({ mdStyle }: Pick<CaptionProps, 'mdStyle'>) => mdStyle}
`;
