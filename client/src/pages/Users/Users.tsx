import styled from 'styled-components';

import { SearchBar, SortButton, UserCard } from '../../components';

const Container = styled.div`
  height: 100%;
  padding: 24px;
  border-left: 1px solid rgb(227, 230, 232);

  h1 {
    margin-bottom: 27px;
    color: rgb(35, 38, 41);
    font-size: 27px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const SearchContainer = styled.div`
  width: 200px;
  margin-left: -7px;
`;

export const DateContainer = styled.section`
  display: flex;
  justify-content: right;
  margin-bottom: 10px;

  button {
    padding: 8px 8px 10px 8px;
    border: none;
    background-color: inherit;
    color: #6a737c;
    font-size: 12px;
  }

  & > button:first-child {
    border-bottom: 1px solid rgb(244, 130, 37);
    color: black;
    font-weight: 700;
  }
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

const Users = () => {
  return (
    <Container>
      <h1>User</h1>
      <FilterContainer>
        <SearchContainer>
          <SearchBar placeholder="Filter by user" height="35px" />
        </SearchContainer>
        <SortButton
          nameList={['Reputation', 'Creation', 'Name', 'Modified']}
          clickedName="reputation"
          onClick={(name) => name}
        />
      </FilterContainer>
      <DateContainer>
        <button type="button">all</button>
        <button type="button">week</button>
        <button type="button">month</button>
        <button type="button">quarter</button>
        <button type="button">year</button>
      </DateContainer>
      <UserContainer>
        <UserCard
          img="https://i.stack.imgur.com/I4fiW.jpg?s=96&g=1"
          link="https://stackoverflow.com/users/1144035/gordon-linoff"
          name="Jon Skeet"
          location="Reading, United Kinkdom"
          reputation="1.2m"
          gold={830}
          silver={830}
          bronze={830}
        />
      </UserContainer>
    </Container>
  );
};

export default Users;
