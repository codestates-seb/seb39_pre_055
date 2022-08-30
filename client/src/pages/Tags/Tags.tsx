import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import {
  CustomPagination,
  SearchBar,
  SortButton,
  TagCard,
} from '../../components';
import {
  changePage,
  changeSortOption,
  getTags,
  resetPage,
  useAppDispatch,
  useAppSelector,
} from '../../redux';

const Container = styled.div`
  padding: 24px;
  border-left: 1px solid rgb(227, 230, 232);

  h1 {
    margin-bottom: 16px;
    color: rgb(35, 38, 41);
    font-size: 27px;
  }
`;

const SHeader = styled.header`
  margin-bottom: 16px;
  color: rgb(35, 38, 41);

  h1 {
    margin-bottom: 16px;
    font-size: 27px;
  }

  p {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SearchBarContainer = styled.div`
  margin-left: -10px;
  width: 200px;
`;

export const TagsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 16px;

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 980px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1265px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: right;
  margin: 20px 0;
`;

const Tags = () => {
  const { tagList, page, sortOption } = useAppSelector((state) => state.tag);
  const dispatch = useAppDispatch();

  const handleSortBtnClick = useCallback(
    (name: string) => {
      dispatch(changeSortOption(name));
      dispatch(resetPage());
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch, page, sortOption]);

  return (
    <Container>
      <SHeader>
        <h1>Tags</h1>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
          <br />
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
      </SHeader>
      <FilterContainer>
        <SearchBarContainer>
          <SearchBar placeholder="Filter by tag name" />
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
      <PaginationContainer>
        <CustomPagination
          activePage={page}
          itemsCountPerPage={90}
          totalItemsCount={900}
          onChange={(number) => dispatch(changePage(number))}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Tags;
