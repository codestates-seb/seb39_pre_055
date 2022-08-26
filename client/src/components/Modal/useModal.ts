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
    console.log('size', width, height);
    /* if (!width && !height) return; */
    setSize({ width, height });
  }, [width, height, setSize]);

  useEffect(() => {
    if (!position) return;
    const { x, y } = position;
    console.log('position', x, y);
    setPosition({ x, y });
  }, [position, setPosition]);

  return { openModal, closeModal };
};

export default useModal;
