import { ReactNode } from 'react';

export interface OpenContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export type Position = {
  x: number | string;
  y: number | string;
} | null;

export type PositionParam = Position | number;

export interface Size {
  width: number | string;
  height: number | string;
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

export interface ModalProps {
  width: string | number;
  height: string | number;
  position: Position | null;
  background: boolean;
  content: ReactNode;
}
