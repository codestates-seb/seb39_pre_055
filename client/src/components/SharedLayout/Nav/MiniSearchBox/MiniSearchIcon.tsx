import { Dispatch, RefObject, SetStateAction } from 'react';

import { Icon, SearchButton } from './style';

interface MiniSearchIconProps {
  setFloatSearch: Dispatch<SetStateAction<boolean>>;
  searchInput: RefObject<HTMLInputElement>;
}

const MiniSearchIcon = ({
  setFloatSearch,
  searchInput,
}: MiniSearchIconProps) => {
  const clickHandler = () => {
    setFloatSearch((prev) => !prev);
    setTimeout(() => {
      if (!searchInput.current) return;
      searchInput.current.focus();
    }, 0);
  };

  return (
    <SearchButton onClick={clickHandler}>
      <Icon />
    </SearchButton>
  );
};

export default MiniSearchIcon;
