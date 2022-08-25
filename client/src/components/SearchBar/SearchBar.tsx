import { RefObject } from 'react';

import { Search, SearchIcon, SearchWrapper } from './style';

export type SearchBarSize = Pick<SearchBarProps, 'width' | 'height'>;

interface SearchBarProps {
  placeholder: string;
  width?: string;
  height?: string;
  wrapperRef?: RefObject<HTMLInputElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}

const DefaultSearchBar = ({
  placeholder,
  width,
  height,
  wrapperRef,
  onFocus,
  onBlur,
}: SearchBarProps) => {
  return (
    <SearchWrapper width={width} height={height} ref={wrapperRef}>
      <Search
        type="text"
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <SearchIcon />
    </SearchWrapper>
  );
};

export default DefaultSearchBar;
