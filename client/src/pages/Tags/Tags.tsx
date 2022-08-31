import { useEffect, useRef } from 'react';

import {
  CustomPagination,
  SearchBar,
  SortButton,
  TagCard,
  TagHeader,
} from '../../components';
import {
  changeTagInName,
  changeTagPage,
  changeTagSortOption,
  getTags,
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
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { tagList, page, sortOption, inName } = useAppSelector(
    (state) => state.tag
  );

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch, page, sortOption, inName]);

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
                dispatch(changeTagInName(inputRef.current?.value as string)),
            }}
          />
        </SearchBarContainer>
        <SortButton
          nameList={['Popular', 'Activity', 'Name']}
          clickedName={sortOption}
          onClick={(name) => dispatch(changeTagSortOption(name))}
        />
      </FilterContainer>
      <TagsContainer>
        {tagList.map((tag) => (
          <TagCard key={tag.name} name={tag.name} count={tag.count} />
        ))}
      </TagsContainer>
      {tagList.length > 89 && (
        <PaginationContainer>
          <CustomPagination
            activePage={page}
            itemsCountPerPage={90}
            totalItemsCount={900}
            onChange={(number) => dispatch(changeTagPage(number))}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};

export default Tags;
