import { KeyboardEvent, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';

import { Search, SearchBox, SearchIcon } from './style';

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
  inputRef?: RefObject<HTMLInputElement>;
  onSearch?: SearchHandler;
  onFocus?: () => void;
  onBlur?: () => void;
  responsive?: boolean;
}

const DefaultSearchBar = ({
  placeholder,
  width,
  height,
  wrapperRef,
  inputRef,
  onFocus,
  onBlur,
  onSearch,
  responsive,
}: SearchBarProps) => {
  const navigate = useNavigate();
  const { callback, navigatePath } = onSearch || {};

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
    <SearchBox
      width={width}
      height={height}
      responsive={responsive}
      ref={wrapperRef}
    >
      <Search
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={handleSearch}
      />
      <SearchIcon />
    </SearchBox>
  );
};

export default DefaultSearchBar;
