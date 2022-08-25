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

interface ModalContextProps {
  width: number | string;
  height: number | string;
  background: boolean;
  children: ReactNode;
}

export const ModalCtx = ({
  width,
  height,
  background = true,
  children,
}: ModalContextProps) => {
  const [mount, setMount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<Size>({ width, height });
  const [position, setPosition] = useState<Position>(null);
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

  customize.setSize = setSize;
  customize.setPosition = setPosition;

  modalCommand.openModal = openModal;
  modalCommand.closeModal = closeModal;

  return (
    <MainCtx.Provider value={modalCommand}>
      <CustomizeCtx.Provider value={customize}>
        <OpenCtx.Provider value={{ isOpen, setIsOpen }}>
          {mount && (
            <Modal
              width={size.width}
              height={size.height}
              position={position}
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
