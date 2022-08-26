import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from '../../..';
import { Modal, useModal } from '../../../Modal';
import SearchHints from './SearchHints';

const MainSearchBox = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  flex: 1 1 300px;
`;

const MainSearchBar = () => {
  const [position, setPosition] = useState({ x: '500px', y: '51px' });
  const [size, setSize] = useState({ width: '200px', height: '200px' });
  const [isFocused, setIsFocused] = useState(false);
  const { openModal, closeModal } = useModal({ ...size, position });
  const searchRef = useRef<HTMLInputElement>(null);

  /* const resizeModal = useCallback(() => {
    if (!searchRef.current) return;

    const left = searchRef.current.offsetLeft;
    const width = searchRef.current.offsetWidth;

    setPosition((prev) => {
      return { ...prev, x: `${left}px` };
    });
    setSize((prev) => {
      return { ...prev, width: `${width}px` };
    });
  }, []); */

  const resizeModal = useCallback(() => {
    if (!searchRef.current) return;

    const width = searchRef.current.offsetWidth;

    setSize((prev) => {
      return { ...prev, width: `${width}px` };
    });
  }, []);

  const repositionModal = useCallback(() => {
    if (!searchRef.current) return;

    const left = searchRef.current.offsetLeft;
    console.log(left);

    setPosition((prev) => {
      return { ...prev, x: `${left}px` };
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

  useEffect(() => {
    const handleReposition = () => {
      if (!isFocused) return;
      repositionModal();
    };

    window.addEventListener('resize', handleReposition);

    return () => window.removeEventListener('resize', handleReposition);
  }, [isFocused, repositionModal]);

  // 1. resize 없이 처음 Modal을 열었을 때 사이즈가 useState() 초기값 그대로인 문제 수정
  useEffect(() => {
    resizeModal();
  }, [resizeModal]);

  return (
    <MainSearchBox>
      <SearchBar
        placeholder="Search"
        onFocus={() => {
          resizeModal();
          repositionModal();
          setIsFocused(true);
          openModal(<SearchHints />);
        }}
        /* onBlur={() => {
        setIsFocused(false);
        closeModal();
      }} */
        wrapperRef={searchRef}
        responsive
      />
    </MainSearchBox>
  );
};

const SearchBarBox = () => {
  return (
    <Modal width="200px" height="200px" background={false}>
      <MainSearchBar />
    </Modal>
  );
};

export default SearchBarBox;
