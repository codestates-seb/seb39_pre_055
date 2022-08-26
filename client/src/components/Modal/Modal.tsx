import { Context, useContext } from 'react';

import { OpenCtx } from './ModalContext';
import { Background, ModalMain } from './styles';
import { ModalProps } from './types';

function useAppContext<T>(ctx: Context<T>) {
  const context: T = useContext(ctx);

  if (context === null || ctx === null) {
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
  const { isOpen, setIsOpen } = useAppContext(OpenCtx) || {}; // TODO: useAppContext 사용하기

  if (!isOpen || !setIsOpen) {
    throw new Error('useAppContext must be within Context Provider');
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
        {/* <Close onClick={() => setIsOpen(false)}>
          <img
            src="https://img.icons8.com/color-glass/48/000000/delete-sign.png"
            alt="close"
          />
        </Close> */}
        {content}
      </ModalMain>
    </>
  );
};

export default Modal;
