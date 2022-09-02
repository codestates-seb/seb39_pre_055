import '@toast-ui/editor/dist/toastui-editor.css';

import { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BlueButton, CustomPagination, SortButton } from '../../../components';
import CountQuestions from '../../../components/CountQuestions/CountQuestions';
import LeftCounts from '../../../components/QuestionElement/LeftCounts/LeftCounts';
import QuestionElement from '../../../components/QuestionElement/QuestionElement';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { getQuestionList } from '../../../redux/actions/questionListActions';
import {
  changeQPage,
  changeQSortOption,
  resetQPage,
  selectQIds,
} from '../../../redux/reducers/questionSlice';
import {
  Container,
  Footer,
  InfoContainer,
  MainUList,
  PagenationButton,
  SortTabs,
  SQuestionList,
  TitleHeader,
} from './style';

const QuestionList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { questionList, page, totalPages, totalElements, sortOption } =
    useAppSelector((store) => store.question);
  const qusetionIds = useAppSelector(selectQIds, shallowEqual);

  useEffect(() => {
    dispatch(getQuestionList());
  }, [dispatch]);

  const handleQSortBtnClick = useCallback(
    (name: string) => {
      dispatch(resetQPage());
      dispatch(changeQSortOption(name));
    },
    [dispatch]
  );

  const handlePageChange = (page: number) => {
    dispatch(changeQPage(page));
    dispatch(getQuestionList());

    window.scroll({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <Container>
      <TitleHeader>
        <h1>All Questions</h1>
        <BlueButton onClick={() => navigate('/ask')}>Ask Question</BlueButton>
      </TitleHeader>
      <InfoContainer>
        <CountQuestions />
        <SortTabs>
          <SortButton
            nameList={['Newest', 'Views']}
            clickedName={sortOption}
            onClick={handleQSortBtnClick}
          />
        </SortTabs>
      </InfoContainer>
      <MainUList>
        {qusetionIds.map((id) => (
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
            totalItemsCount={totalElements}
            pageRangeDisplayed={totalPages < 5 ? totalPages : 5}
          />
        </PagenationButton>
      </Footer>
    </Container>
  );
};

export default QuestionList;
