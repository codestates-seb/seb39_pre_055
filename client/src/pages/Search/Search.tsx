import { useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { BlueButton, CustomPagination, SortButton } from '../../components';
import CountQuestions from '../../components/CountQuestions/CountQuestions';
import LeftCounts from '../../components/QuestionElement/LeftCounts/LeftCounts';
import QuestionElement from '../../components/QuestionElement/QuestionElement';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getSearchResults } from '../../redux/actions/searchActions';
import { selectResultIds, setKeyword } from '../../redux/reducers/searchSlice';
import {
  Container,
  Footer,
  InfoContainer,
  MainUList,
  PagenationButton,
  SAdvLink,
  SortTabs,
  SQuestionList,
  TitleHeader,
} from './style';

const Search = () => {
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();
  const search = params.get('search') || '';
  const { keyword, page } = useAppSelector((state) => state.search);
  const resultIds = useAppSelector((state) => selectResultIds(state));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setKeyword(search));
    dispatch(getSearchResults());
  }, [search, dispatch]);

  const handleSort = useCallback(() => {
    'fg';
  }, []);

  const handlePageChange = useCallback(() => {
    'fg';
  }, []);

  return (
    <Container>
      <TitleHeader>
        <h1>Search Results</h1>
        <SAdvLink
          href="https://stackoverflow.com/search?q=resd#"
          target="_blank"
          rel="noopener"
        >
          Advanced Search Tips
        </SAdvLink>
        <BlueButton onClick={() => navigate('/ask')}>Ask Question</BlueButton>
      </TitleHeader>
      <InfoContainer>
        <CountQuestions />
        <SortTabs>
          <SortButton
            nameList={['Newest', 'Votes']}
            clickedName="sortOption"
            onClick={handleSort}
          />
        </SortTabs>
      </InfoContainer>
      <MainUList>
        {resultIds.map((id) => (
          <SQuestionList key={id}>
            <LeftCounts id={id} />
            <QuestionElement id={id} />
          </SQuestionList>
        ))}
      </MainUList>
      <Footer>
        <PagenationButton>
          <CustomPagination
            onChange={handlePageChange}
            activePage={page}
            itemsCountPerPage={15}
            totalItemsCount={100 /* totalElements */}
            pageRangeDisplayed={5 /* totalPages < 5 ? totalPages : 5 */}
          />
        </PagenationButton>
      </Footer>
    </Container>
  );
};

export default Search;
