import { ReactNode } from 'react';
import styled from 'styled-components';

import DefaultBtn, { ButtonProps } from './DefaultButton';

type TemplateButtonProps = Pick<ButtonProps, 'width' | 'height'> & {
  children: ReactNode;
};

export const BlueButton = ({
  width,
  height,
  children,
}: TemplateButtonProps) => {
  return (
    <DefaultBtn
      color="blue"
      mainCode="400"
      hoverCode="600"
      textColor="white"
      width={width}
      height={height}
    >
      {children}
    </DefaultBtn>
  );
};

export const PowderButton = ({
  width,
  height,
  children,
}: TemplateButtonProps) => {
  return (
    <DefaultBtn
      color="powder"
      mainCode="200"
      hoverCode="400"
      textColor="var(--powder-700)"
      width={width}
      height={height}
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
