import { useContext, useEffect } from 'react';

import { CustomizeCtx, MainCtx } from './ModalContext';
import { PositionParam, SizeParam } from './types';

type UnitObject<T> = {
  [P in keyof T]: string | number;
};

type UnitPx<T> = {
  [P in keyof T]: string;
};

function unitConverter /* <T extends { [P in keyof T]: string | number }> */(
  input: any
) {
  /* if (!input) return input; */
  const keys = Object.keys(input) as (keyof typeof input)[];

  keys.forEach((k) => {
    if (typeof input[k] === 'number') {
      const value: number = input[k];

      input[k] = `${value}px`;
    }
  });

  return input;
}

const useModal = (size: SizeParam, position?: PositionParam) => {
  const { openModal, closeModal } = useContext(MainCtx) || {};
  const { setSize, setPosition } = useContext(CustomizeCtx) || {};

  if (!openModal || !closeModal || !setSize || !setPosition) {
    throw new Error('useModal was used outside of ModalCtx.Provider.');
  }
  if (typeof size === 'number' && typeof position === 'number') {
    size = { width: size, height: position };
    position = undefined;
  }

  useEffect(() => {
    if (!size || typeof size === 'number') return;
    const { width, height } = unitConverter(size);

    setSize({ width, height });
  }, [size, setSize]);

  useEffect(() => {
    if (!position || typeof position === 'number') return;
    const { x, y } = unitConverter(position);

    setPosition({ x, y });
  }, [position, setPosition]);

  return { openModal, closeModal };
};

export default useModal;
