/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Modal from './Modal';
import {
  CustomizeContext,
  MainContext,
  ModalContextProps,
  OpenContext,
  Position,
  Size,
} from './types';

export const MainCtx = createContext<MainContext | null>(null);
export const CustomizeCtx = createContext<CustomizeContext | null>(null);
export const OpenCtx = createContext<OpenContext | null>(null);
const customize: CustomizeContext = {
  setSize: null,
  setPosition: null,
};
const modalCommand: MainContext = {
  openModal: null,
  closeModal: null,
};

export const ModalCtx = ({
  width,
  height,
  minWidth,
  minHeight,
  position,
  borderRadius,
  boxShadow,
  background = true,
  children,
}: ModalContextProps) => {
  const [mount, setMount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalSize, setModalSize] = useState<Size>({ width, height });
  const [modalPosition, setModalPosition] = useState<Position>(null);
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = useCallback((component: ReactNode) => {
    setMount(true);
    setIsOpen(true);
    setContent(component);
  }, []);
  const closeModal = useCallback(() => {
    setMount(false);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;

    if (!isOpen) {
      timerId = setTimeout(() => setMount(false), 350);
    }
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';

    return () => clearTimeout(timerId);
  }, [isOpen]);

  customize.setSize = setModalSize;
  customize.setPosition = setModalPosition;

  modalCommand.openModal = openModal;
  modalCommand.closeModal = closeModal;

  return (
    <MainCtx.Provider value={modalCommand}>
      <CustomizeCtx.Provider value={customize}>
        <OpenCtx.Provider value={{ isOpen, setIsOpen }}>
          {mount && (
            <Modal
              width={modalSize.width}
              height={modalSize.height}
              minWidth={minWidth}
              minHeight={minHeight}
              borderRadius={borderRadius}
              boxShadow={boxShadow}
              position={modalPosition}
              background={background}
              content={content}
            />
          )}
        </OpenCtx.Provider>
        {children}
      </CustomizeCtx.Provider>
    </MainCtx.Provider>
  );
};
