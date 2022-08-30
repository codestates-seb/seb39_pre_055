import { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

import { SearchBar, TagCard } from '../../components';
import { getTags, useAppDispatch, useAppSelector } from '../../redux';

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

export const PageContainer = styled.section`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

const Tags = () => {
  const { tagList } = useAppSelector((state) => state.tag);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

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
        <div>
          <button type="button">Popular</button>
          <button type="button">Name</button>
          <button type="button">New</button>
        </div>
      </FilterContainer>
      <TagsContainer>
        {tagList.map((tag) => (
          <TagCard key={tag.name} name={tag.name} count={tag.count} />
        ))}
      </TagsContainer>
      <PageContainer>
        <Pagination
          activePage={1}
          onChange={() => console.log('change')}
          totalItemsCount={15}
        />
      </PageContainer>
    </Container>
  );
};

export default Tags;
