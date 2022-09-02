import { useEffect, useRef } from 'react';

import {
  CustomPagination,
  DateButton,
  LoadingSpinner,
  SearchBar,
  SortButton,
  UserCard,
} from '../../components';
import {
  changeUserDateOption,
  changeUserInName,
  changeUserPage,
  changeUserSortOption,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { getUser } from '../../redux/actions/userAction';
import { PaginationContainer } from '../Tags/style';
import {
  Container,
  FilterContainer,
  SearchContainer,
  UserContainer,
} from './style';

const Users = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const {
    sortOption,
    dateOption,
    userList,
    page,
    inName,
    timeStamp,
    isLoading,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, sortOption, page, dateOption, inName, timeStamp]);

  return (
    <Container>
      <h1>Users</h1>
      <FilterContainer>
        <SearchContainer>
          <SearchBar
            placeholder="Filter by user"
            height="35px"
            inputRef={inputRef}
            onSearch={{
              callback: () =>
                dispatch(changeUserInName(inputRef.current?.value as string)),
            }}
          />
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
      <UserContainer isLoading={isLoading}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          userList.map((user) => (
            <UserCard
              key={user.account_id}
              img={user.profile_image}
              link={user.link}
              name={user.display_name}
              location={user.location}
              reputation={user.reputation}
              gold={user.badge_counts.gold}
              silver={user.badge_counts.silver}
              bronze={user.badge_counts.bronze}
            />
          ))
        )}
      </UserContainer>
      {userList.length > 71 && (
        <PaginationContainer>
          <CustomPagination
            activePage={page}
            itemsCountPerPage={72}
            totalItemsCount={720}
            onChange={(number) => dispatch(changeUserPage(number))}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};

export default Users;
