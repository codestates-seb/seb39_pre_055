import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  height: 100%;
  border-left: 1px solid rgb(227, 230, 232);

  h1 {
    margin-bottom: 16px;
    color: rgb(35, 38, 41);
    font-size: 27px;
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
  margin-bottom: 40px;

  & > div:last-child {
    position: absolute;
    top: 40%;
    left: 50%;
  }

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
  display: 'flex';
  display: flex;
  justify-content: right;
  margin: 20px 0;
`;
