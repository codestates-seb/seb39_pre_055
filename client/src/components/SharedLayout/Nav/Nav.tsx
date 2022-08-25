/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef, useState } from 'react';

import { SearchBar } from '../..';
import { useModal } from '../../Modal';
import MainAuth from './MainAuth/MainAuth';
import MiscBtns from './MiscButtons/MiscBtns';
import { LogoWrapper, MainLogo, SHeader, SNav } from './style';

const SearchHints = () => {
  return <div>TEtwetsegysgwse</div>;
};

const MainSearchBar = () => {
  const [position, setPosition] = useState({ x: '500px', y: '51px' });
  const [size, setSize] = useState({ width: '200px', height: '100px' });
  const [isFocused, setIsFocused] = useState(false);
  const { openModal, closeModal } = useModal(size, position);
  const searchRef = useRef<HTMLInputElement>(null);

  const resizeModal = useCallback(() => {
    if (!searchRef.current) return;

    const left = searchRef.current.offsetLeft;
    const width = searchRef.current.offsetWidth;

    setPosition((prev) => {
      return { ...prev, x: `${left}px` };
    });
    setSize((prev) => {
      return { ...prev, width: `${width}px` };
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!isFocused) return;
      resizeModal();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isFocused, resizeModal]);

  // 1. resize 없이 처음 Modal을 열었을 때 사이즈가 useState() 초기값 그대로인 문제 수정
  /* useEffect(() => resizeModal(), [resizeModal]); */

  return (
    <SearchBar
      placeholder="Search"
      onFocus={() => {
        resizeModal();
        setIsFocused(true);
        openModal(<SearchHints />);
      }}
      onBlur={() => {
        setIsFocused(false);
        closeModal();
      }}
      wrapperRef={searchRef}
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
        <MainSearchBar />
        <MainAuth />
      </SNav>
    </SHeader>
  );
};

export default Nav;
