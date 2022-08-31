import styled from 'styled-components';

import DefaultBtn, { ButtonProps } from './DefaultButton';
import { Btn } from './style';

type TemplateButtonProps = Pick<
  ButtonProps,
  'width' | 'height' | 'onClick' | 'children' | 'polymorphic' | 'className'
>;

export const BlueButton = ({
  width,
  height,
  children,
  polymorphic,
  className,
  onClick,
}: TemplateButtonProps) => {
  return (
    <DefaultBtn
      color="blue"
      mainCode="400"
      hoverCode="600"
      textColor="white"
      width={width}
      height={height}
      polymorphic={polymorphic}
      className={className}
      onClick={onClick}
    >
      {children}
    </DefaultBtn>
  );
};

export const PowderButton = ({
  width,
  height,
  children,
  polymorphic,
  className,
  onClick,
}: TemplateButtonProps) => {
  return (
    <DefaultBtn
      color="powder"
      mainCode="200"
      hoverCode="400"
      textColor="var(--powder-700)"
      width={width}
      height={height}
      polymorphic={polymorphic}
      className={className}
      onClick={onClick}
    >
      {children}
    </DefaultBtn>
  );
};

export const RoundButton = styled(Btn)`
  color: var(--black-700);
  border-radius: 20px;
  width: 80px;
`;
