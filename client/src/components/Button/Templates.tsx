import styled from 'styled-components';

import DefaultBtn, { ButtonProps } from './DefaultButton';
import { Buttton } from './style';

type TemplateButtonProps = Omit<
  ButtonProps,
  'color' | 'mainCode' | 'hoverCode' | 'textColor'
>;

export const BlueButton = ({
  width,
  height,
  children,
  polymorphic,
  isError,
  isPending,
  className,
  onClick,
  disabled,
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
      isPending={isPending}
      isError={isError}
      disabled={disabled}
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
  isError,
  isPending,
  className,
  onClick,
  disabled,
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
      isPending={isPending}
      isError={isError}
      disabled={disabled}
    >
      {children}
    </DefaultBtn>
  );
};

export const RoundButton = styled(Buttton)`
  color: var(--black-700);
  border-radius: 20px;
  width: 80px;
`;
