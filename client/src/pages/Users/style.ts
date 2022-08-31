import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 24px;
  border-left: 1px solid rgb(227, 230, 232);

  h1 {
    margin-bottom: 27px;
    color: rgb(35, 38, 41);
    font-size: 27px;
  }
`;

export const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SearchContainer = styled.div`
  width: 200px;
  margin-left: -7px;
`;

export const UserContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 1265px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
