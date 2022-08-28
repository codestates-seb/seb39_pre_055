import { useRef, useState } from 'react';
import styled from 'styled-components';

import Footer from './Footer/Footer';
import Main from './Main/Main';
import SearchBarBox from './Nav/MainSearchBar/MainSearchBar';
import Nav from './Nav/Nav';

const Shared = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SharedLayout = () => {
  const [floatSearch, setFloatSearch] = useState(false);
  const searchInput = useRef(null); // FIXME: 넘겨줘야 할 함수, 객체가 많아졌는데 줄일 수 있는 방법

  return (
    <Shared>
      <Nav setFloatSearch={setFloatSearch} searchInput={searchInput} />
      {floatSearch && (
        <SearchBarBox
          width="560px"
          responsive={false}
          onSearchHandler={() => setFloatSearch(false)}
          onBlurHandler={() => setFloatSearch(false)}
          inputRef={searchInput}
        />
      )}
      <Main />
      <Footer />
    </Shared>
  );
};

export default SharedLayout;
