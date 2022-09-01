import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

const asideHideURL = ['/ask', '/login', '/logout', '/signup'];
const footerHideURL = ['/login', '/logout', '/signup'];

const SharedLayout = () => {
  const [floatSearch, setFloatSearch] = useState(false);
  const searchInput = useRef(null);
  const { pathname } = useLocation();
  const asideHide = asideHideURL.includes(pathname);
  const footerHide = footerHideURL.includes(pathname);

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
      <Main asideHide={asideHide} />
      {footerHide || <Footer />}
    </Shared>
  );
};

export default SharedLayout;
