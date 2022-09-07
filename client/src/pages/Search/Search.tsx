/* eslint-disable no-nested-ternary */
import { useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { BlueButton, CustomPagination, SortButton } from '../../components';
import CountQuestions from '../../components/CountQuestions/CountQuestions';
import LeftCounts from '../../components/QuestionElement/LeftCounts/LeftCounts';
import QuestionElement from '../../components/QuestionElement/QuestionElement';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getSearchResults } from '../../redux/actions/searchActions';
import {
  changeQPage,
  changeQSortOption,
  selectInfos,
  selectResultIds,
  setKeyword,
} from '../../redux/reducers/searchSlice';
import NoSearchResult from './NoSearchResult';
import {
  Footer,
  InfoContainer,
  MainUList,
  PagenationButton,
  SAdvLink,
  SElementSection,
  SKeywordP,
  SMainBox,
  SortTabs,
  SPromoAside,
  SQuestionList,
  SSPinner,
  TitleHeader,
} from './style';

const Search = () => {
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();
  const search = params.get('search') || '';
  const { page, totalPages, totalElements, sortOption, isLoading } =
    useAppSelector((state) => state.search);
  const resultIds = useAppSelector((state) => selectResultIds(state));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setKeyword(search));
    dispatch(getSearchResults());
  }, [search, dispatch]);

  const handleSort = useCallback(
    (name: string) => {
      dispatch(changeQPage(1));
      dispatch(changeQSortOption(name));
      dispatch(getSearchResults());
    },
    [dispatch]
  );

  const handlePageChange = (page: number) => {
    dispatch(changeQPage(page));
    dispatch(getSearchResults());

    window.scroll({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <SMainBox>
      <SElementSection>
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
          <SKeywordP>{`Results for ${search}`}</SKeywordP>
        </TitleHeader>
        <InfoContainer>
          <CountQuestions counts={totalElements} />
          <SortTabs>
            <SortButton
              nameList={['Newest', 'Views', 'Votes']}
              clickedName={sortOption}
              onClick={handleSort}
            />
          </SortTabs>
        </InfoContainer>
        {isLoading ? (
          <SSPinner />
        ) : resultIds.length < 1 ? (
          <NoSearchResult keyword={search} />
        ) : (
          <MainUList>
            {resultIds.map((id) => (
              <SQuestionList key={id}>
                <LeftCounts id={id} selector={selectInfos} />
                <QuestionElement id={id} selector={selectInfos} />
              </SQuestionList>
            ))}
          </MainUList>
        )}
        <Footer>
          <PagenationButton>
            <CustomPagination
              onChange={handlePageChange}
              activePage={page}
              itemsCountPerPage={15}
              totalItemsCount={totalElements}
              pageRangeDisplayed={totalPages < 5 ? totalPages : 5}
            />
          </PagenationButton>
        </Footer>
      </SElementSection>
      <SPromoAside />
    </SMainBox>
  );
};

export default Search;
