import { ReactNode } from 'react';

import { Btn } from './style';

export interface ButtonProps {
  color: 'black' | 'orange' | 'blue' | 'powder';
  mainCode: string;
  children: ReactNode;
  onClick?: () => void;
  hoverCode?: string /* hover 시 나타낼 색상(색상 분류(blue, black, powder 등)는 같아야 함) */;
  textColor?: string;
  width?: string;
  height?: string;
  polymorphic?: 'button' | 'li' | 'div';
}

const DefaultBtn = ({
  color,
  mainCode,
  hoverCode,
  textColor,
  width,
  height,
  polymorphic = 'button',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <Btn
      color={color}
      mainCode={mainCode}
      hoverCode={hoverCode}
      textColor={textColor}
      width={width}
      height={height}
      as={polymorphic}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
};

export default DefaultBtn;
