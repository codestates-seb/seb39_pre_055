import { useContext, useEffect } from 'react';

import { CustomizeCtx, MainCtx } from './ModalContext';
import { ModalStyle } from './types';

const useModal = ({
  width,
  height,
  position,
  borderRadius,
  boxShadow,
}: ModalStyle) => {
  const { openModal, closeModal } = useContext(MainCtx) || {};
  const { setSize, setPosition } = useContext(CustomizeCtx) || {};

  if (!openModal || !closeModal || !setSize || !setPosition) {
    throw new Error('useModal was used outside of ModalCtx.Provider.');
  }
  useEffect(() => {
    console.log('현재 Modal 크기', { width, height });
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
