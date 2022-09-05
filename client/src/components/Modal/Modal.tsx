import { Context, useContext } from 'react';

import { OpenCtx } from './ModalContext';
import { Background, ModalMain } from './style';
import { ModalProps } from './types';

type Nullable<S> = S | void;

function useAppContext<T /* extends Nullable<T> */>(ctx: Context<T>): T {
  const context = useContext(ctx);

  if (!context || !ctx) {
    throw new Error('useAppContext must be within Context Provider');
  }

  return context;
}

const Modal = ({
  width,
  height,
  minWidth,
  minHeight,
  position,
  borderRadius,
  boxShadow,
  background = true,
  content,
}: ModalProps) => {
  const { isOpen, setIsOpen } = useContext(OpenCtx) || {}; // TODO: useAppContext 사용하기

  if (isOpen === undefined || !setIsOpen) {
    throw new Error('useContext must be within Context Provider');
  }

  return (
    <>
      {background && (
        <Background isMount={isOpen} onClick={() => setIsOpen(false)} />
      )}
      <ModalMain
        isMount={isOpen}
        width={width}
        height={height}
        minWidth={minWidth}
        minHeight={minHeight}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        position={position}
      >
        {content}
      </ModalMain>
    </>
  );
};

export default Modal;
