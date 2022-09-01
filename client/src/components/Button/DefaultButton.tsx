import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

import { Buttton } from './style';

export interface ButtonProps {
  color: 'black' | 'orange' | 'blue' | 'powder';
  mainCode: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverCode?: string /* hover 시 나타낼 색상(색상 분류(blue, black, powder 등)는 같아야 함) */;
  textColor?: string;
  width?: string;
  height?: string;
  polymorphic?: 'li' | 'div' | 'a';
  isPending?: boolean;
  isError?: boolean;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: relative;
  top: -2%;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  margin-right: 7px;

  border-top: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgba(212, 212, 212, 0.2);
  border-left: 2px solid rgba(212, 212, 212, 0.2);
  border-bottom: 2px solid rgba(212, 212, 212, 0.2);
  background-color: rgba(184, 184, 184, 0);
  animation: ${spin} 1s infinite linear;
  background-color: rgba(146, 255, 228, 0);
`;

const DefaultBtn = ({
  color,
  mainCode,
  hoverCode,
  textColor,
  width,
  height,
  polymorphic,
  className,
  isError = false,
  isPending = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <Buttton
      color={color}
      mainCode={mainCode}
      hoverCode={hoverCode}
      textColor={textColor}
      width={width}
      height={height}
      as={polymorphic || 'button'}
      isError={isError}
      className={className}
      onClick={onClick}
    >
      {isPending && <Spinner />}
      {children}
    </Buttton>
  );
};

export default DefaultBtn;
