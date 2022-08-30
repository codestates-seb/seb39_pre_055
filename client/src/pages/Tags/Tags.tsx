import { useCallback, useEffect, useRef } from 'react';

import {
  CustomPagination,
  SearchBar,
  SortButton,
  TagCard,
  TagHeader,
} from '../../components';
import {
  changeInName,
  changePage,
  changeSortOption,
  getTags,
  resetPage,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import {
  Container,
  FilterContainer,
  PaginationContainer,
  SearchBarContainer,
  TagsContainer,
} from './style';

const Tags = () => {
  const { tagList, page, sortOption } = useAppSelector((state) => state.tag);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSortBtnClick = useCallback(
    (name: string) => {
      dispatch(resetPage());
      dispatch(changeSortOption(name));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch, page, sortOption]);

  return (
    <Container>
      <TagHeader />
      <FilterContainer>
        <SearchBarContainer>
          <SearchBar
            placeholder="Filter by tag name"
            inputRef={inputRef}
            onSearch={{
              callback: () =>
                dispatch(changeInName(inputRef.current?.value as string)),
            }}
          />
        </SearchBarContainer>
        <SortButton
          nameList={['Popular', 'Activity', 'Name']}
          clickedName={sortOption}
          onClick={handleSortBtnClick}
        />
      </FilterContainer>
      <TagsContainer>
        {tagList.map((tag) => (
          <TagCard key={tag.name} name={tag.name} count={tag.count} />
        ))}
      </TagsContainer>
      {tagList.length > 90 && (
        <PaginationContainer>
          <CustomPagination
            activePage={page}
            itemsCountPerPage={90}
            totalItemsCount={900}
            onChange={(number) => dispatch(changePage(number))}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};

export default Tags;
