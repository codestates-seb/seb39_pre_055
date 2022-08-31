import { DateButton, SearchBar, SortButton, UserCard } from '../../components';
import {
  changeUserDateOption,
  changeUserSortOption,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import {
  Container,
  FilterContainer,
  SearchContainer,
  UserContainer,
} from './style';

const Users = () => {
  const { sortOption, dateOption } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <h1>User</h1>
      <FilterContainer>
        <SearchContainer>
          <SearchBar placeholder="Filter by user" height="35px" />
        </SearchContainer>
        <SortButton
          nameList={['Reputation', 'Creation', 'Name', 'Modified']}
          clickedName={sortOption}
          onClick={(name) => dispatch(changeUserSortOption(name))}
        />
      </FilterContainer>
      <DateButton
        nameList={['all', 'week', 'month', 'quarter', 'year']}
        clickedName={dateOption}
        onClick={(name) => dispatch(changeUserDateOption(name))}
      />
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
