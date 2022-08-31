import { SearchBar, SortButton, UserCard } from '../../components';
import {
  Container,
  DateContainer,
  FilterContainer,
  SearchContainer,
  UserContainer,
} from './style';

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
