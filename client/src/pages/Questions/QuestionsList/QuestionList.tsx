import '@toast-ui/editor/dist/toastui-editor.css';

import { useCallback, useEffect, useState } from 'react';
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
// 컴포넌트 수정 후 통합하기

const QuestionList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { questionList, page, totalPages, sortOption } = useAppSelector(
    (store) => store.question
  );
  const handleQSortBtnClick = useCallback(
    (name: string) => {
      dispatch(resetQPage());
      dispatch(changeQSortOption(name));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getQuestionList());
  }, []);
  // const handlePageChange = (page: SetStateAction<number>) => {
  //   setPage(page);
  //   return (
  //     <CustomPagination
  //       activePage={1}
  //       itemsCountPerPage={15}
  //       totalItemsCount={750}
  //       pageRangeDisplayed={5}
  //       onChange={handlePageChange}
  //     />
  //   );
  // };

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
        {questionList.map((q) => (
          <SQuestionList key={q.questionId}>
            <LeftCounts votes={q.vote} answers={0} views={q.view} />
            <QuestionElement
              contents={q.body}
              title={q.title}
              user={q.user}
              questionId={q.questionId}
              tagList={q.questionTags}
              createdAt={q.createdAt}
            />
          </SQuestionList>
        ))}
      </MainUList>
      <Footer>
        <PagenationButton>
          <CustomPagination
            onChange={(number) => dispatch(changeQPage(number))}
            activePage={page}
            itemsCountPerPage={15} // 한 페이지에 표시할 게시글의 수
            totalItemsCount={750} // 서버에서 받아올 총 개수
          />
        </PagenationButton>
      </Footer>
    </Container>
  );
};

export default QuestionList;
