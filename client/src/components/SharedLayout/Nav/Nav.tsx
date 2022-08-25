/* eslint-disable consistent-return */

import { useCallback, useEffect, useRef, useState } from 'react';
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
      console.log('resize', isFocused);
      if (!isFocused) return;
      resizeModal();
    };

    window.addEventListener('resize', handleResize);

    /* return () => window.removeEventListener('resize', handleResize); */
    // 클린업 함수 안 넣으면 매번 생성되는 handleResize의 주소가 다르므로 이밴트 핸들러가 계속 부착됨!! 그래서 수십개의 동일한 이벤트 핸들러가 실행되는 버그 발생
  }, [isFocused, resizeModal]);

  // 1. resize 없이 처음 Modal을 열었을 때 사이즈가 useState() 초기값 그대로인 문제 수정
  useEffect(() => resizeModal(), [resizeModal]);

  // 2. blur 상태에서 resize 이벤트가 발생하고, focus 상태로 바뀌었을 때 사이즈, 위치가 이전 그대로인 문제 수정
  // focusin 이벤트 핸들러에 추가

  return (
    <Search
      type="text"
      placeholder="Search"
      tabIndex={0}
      onFocus={() => {
        resizeModal();
        setIsFocused(true);
        openModal(<SearchHints />);
      }}
      onBlur={() => {
        setIsFocused(false);
        closeModal();
      }}
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
