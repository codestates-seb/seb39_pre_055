import { useContext, useEffect } from 'react';

import { CustomizeCtx, MainCtx } from './ModalContext';
import { ModalStyle, Position } from './types';

type useModalProps =
  | {
      width?: string;
      height?: string;
      position?: Position;
      borderRadius?: string;
      boxShadow?: string;
    }
  | undefined;

const useModal = (props: useModalProps = undefined) => {
  const { width, height, position, borderRadius, boxShadow } = props || {};
  const { openModal, closeModal } = useContext(MainCtx) || {};
  const { setSize, setPosition } = useContext(CustomizeCtx) || {};

  if (!openModal || !closeModal || !setSize || !setPosition) {
    throw new Error('useModal was used outside of ModalCtx.Provider.');
  }

  useEffect(() => {
    if (!width || !height) return;
    setSize({ width, height });
  }, [width, height, setSize]);

  useEffect(() => {
    if (!position) return;
    const { x, y } = position;

    setPosition({ x, y });
  }, [position, setPosition]);

  return { openModal, closeModal };
};

export default useModal;
