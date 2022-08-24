import { ReactNode } from 'react';
import styled from 'styled-components';

import DefaultBtn from './DefaultButton';

interface TemplateButtonProps {
  children: ReactNode;
}

export const BlueButton = ({ children }: TemplateButtonProps) => {
  return (
    <DefaultBtn
      color="blue"
      mainCode="400"
      hoverCode="600"
      textColor="white"
      width="60px"
    >
      {children}
    </DefaultBtn>
  );
};

export const PowderButton = ({ children }: TemplateButtonProps) => {
  return (
    <DefaultBtn
      color="powder"
      mainCode="400"
      hoverCode="600"
      textColor="white"
      width="60px"
    >
      {children}
    </DefaultBtn>
  );
};

export const RoundButton = styled(DefaultBtn)`
  color: var(--black-700);
  border-radius: 20px;
  width: 80px;
`;
