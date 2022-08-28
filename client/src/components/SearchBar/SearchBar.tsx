import { KeyboardEvent, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';

import { Search, SearchIcon, SearchWrapper } from './style';

export type SearchBarSize = Pick<
  SearchBarProps,
  'width' | 'height' | 'responsive'
>;

interface SearchHandler {
  callback: () => void;
  navigatePath?: string;
}

interface SearchBarProps {
  placeholder: string;
  width?: string;
  height?: string;
  wrapperRef?: RefObject<HTMLInputElement>;
  searchHandler?: SearchHandler;
  onFocus?: () => void;
  onBlur?: () => void;
  responsive?: boolean;
}

const DefaultSearchBar = ({
  placeholder,
  width,
  height,
  wrapperRef,
  onFocus,
  onBlur,
  searchHandler,
  responsive,
}: SearchBarProps) => {
  const navigate = useNavigate();
  const { callback, navigatePath } = searchHandler || {};

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const keyword = e.currentTarget.value;

    e.currentTarget.blur();
    if (callback) {
      callback();
    }
    if (navigatePath) {
      navigate(`/search?q=${keyword}`);
    }
  };

  return (
    <SearchWrapper
      width={width}
      height={height}
      responsive={responsive}
      ref={wrapperRef}
    >
      <Search
        type="text"
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={handleSearch}
      />
      <SearchIcon />
    </SearchWrapper>
  );
};

export default DefaultSearchBar;
