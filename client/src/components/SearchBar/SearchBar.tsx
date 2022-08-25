import { RefObject } from 'react';

import { Search, SearchIcon, SearchWrapper } from './style';

export type SearchBarSize = Pick<
  SearchBarProps,
  'width' | 'height' | 'responsive'
>;

interface SearchBarProps {
  placeholder: string;
  width?: string;
  height?: string;
  wrapperRef?: RefObject<HTMLInputElement>;
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
  responsive,
}: SearchBarProps) => {
  return (
    <SearchWrapper
      width={width}
      height={height}
      ref={wrapperRef}
      responsive={responsive}
    >
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
