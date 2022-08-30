import { useEffect } from 'react';
import styled from 'styled-components';

import {
  CustomPagination,
  SearchBar,
  SortButton,
  TagCard,
} from '../../components';
import {
  changePage,
  getTags,
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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    height: 35px;
    padding: 10px;
    color: rgb(106, 115, 124);
    background-color: white;
    border: 1px solid rgb(159, 166, 173);
    border-right: 0;
    font-size: 13px;

    &:hover {
      background-color: #f0efef;
    }

    &:focus {
      color: var(--black-700);
      background-color: var(--black-075);
    }
  }

  & > button:first-child {
    border-radius: 3px 0 0 3px;
  }

  & > button:last-child {
    border-right: 1px solid rgb(159, 166, 173);
    border-radius: 0 3px 3px 0;
  }
`;

const Tags = () => {
  const { tagList, page } = useAppSelector((state) => state.tag);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch, page]);

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
          nameList={['Popular', 'Name', 'New']}
          onClick={(name) => console.log(name)}
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
          onChange={(page) => dispatch(changePage(page))}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Tags;
