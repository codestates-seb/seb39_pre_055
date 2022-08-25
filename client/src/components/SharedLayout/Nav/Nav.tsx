/* eslint-disable consistent-return */

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useModal } from '../../Modal';
import MainAuth from './MainAuth/MainAuth';
import MiscBtns from './MiscButtons/MiscBtns';
import { LogoWrapper, MainLogo, SHeader, SNav } from './style';

const Search = styled.input`
  height: 32px;
  flex: 1 1 180px;
  margin-left: 10px;
  margin-right: 10px;
`;

const SearchHints = () => {
  return <div>TEtwetsegysgwse</div>;
};

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const prevPosition = useRef(0);
  const prevWidth = useRef(0);
  const [position, setPosition] = useState({ x: '500px', y: '51px' });
  const [size, setSize] = useState({ width: '200px', height: '100px' });
  const [isFocused, setIsFocuesd] = useState(false);
  const { openModal, closeModal } = useModal(size, position);

  useEffect(() => {
    const resizeModal = () => {
      if (!searchRef.current) return;

      const left = searchRef.current.offsetLeft;
      const width = searchRef.current.offsetWidth;
      /* console.log(isFocused, left, width); */
      if (!isFocused) return;
      setPosition((prev) => {
        return { ...prev, x: `${left}px` };
      });
      setSize((prev) => {
        return { ...prev, width: `${width}px` };
      });
      prevPosition.current = left;
      prevWidth.current = width;
    };

    window.addEventListener('resize', resizeModal);

    return () => window.removeEventListener('resize', resizeModal);
  }, [isFocused]);

  // 1. resize 없이 처음 Modal을 열었을 때 사이즈가 useState() 초기값 그대로인 문제 수정
  useEffect(() => {
    if (!searchRef.current) return;

    const left = searchRef.current.offsetLeft;
    const width = searchRef.current.offsetWidth;

    setPosition((prev) => {
      return { ...prev, x: `${left}px` };
    });
    setSize((prev) => {
      return { ...prev, width: `${width}px` };
    });
    prevPosition.current = left;
    prevWidth.current = width;
  }, []);

  // 2. blur 상태에서 resize 이벤트가 발생하고, focus 상태로 바뀌었을 때 사이즈, 위치가 이전 그대로인 문제

  useEffect(() => {
    if (!searchRef.current) return;
    const element = searchRef.current;

    const setFocused = () => setIsFocuesd(true);

    element.addEventListener('focusin', setFocused);

    return () => element.removeEventListener('focusin', setFocused);
  }, []);

  useEffect(() => {
    if (!searchRef.current) return;
    const element = searchRef.current;

    const setBlurred = () => {
      setIsFocuesd(false);
      closeModal();
    };

    element.addEventListener('blur', setBlurred);

    return () => element.removeEventListener('blur', setBlurred);
  }, [closeModal]);

  return (
    <Search
      type="text"
      placeholder="Search"
      onFocus={() => openModal(<SearchHints />)}
      ref={searchRef}
    />
  );
};

const Nav = () => {
  return (
    <SHeader>
      <SNav>
        <LogoWrapper>
          <MainLogo />
        </LogoWrapper>
        <MiscBtns />
        <SearchBar />
        <MainAuth />
      </SNav>
    </SHeader>
  );
};

export default Nav;
