import { ReactNode } from 'react';

export interface OpenContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export type Position = {
  x: string;
  y: string;
} | null;

export interface Size {
  width: string;
  height: string;
  minWidth?: string;
  minHeight?: string;
}

export type SizeParam = Size | number;

export interface CustomizeContext {
  setSize: null | ((size: Size) => void);
  setPosition: null | ((size: Position) => void);
}

export interface MainContext {
  openModal: null | ((component: ReactNode) => void);
  closeModal: null | (() => void);
}

export interface ModalStyle {
  width: string;
  height: string;
  minWidth?: string;
  minHeight?: string;
  position?: Position;
  borderRadius?: string;
  boxShadow?: string;
}

export interface ModalProps extends ModalStyle {
  background: boolean;
  content: ReactNode;
}

export type ModalContextProps = Exclude<ModalStyle, 'position'> & {
  background: boolean;
  children: ReactNode;
};
