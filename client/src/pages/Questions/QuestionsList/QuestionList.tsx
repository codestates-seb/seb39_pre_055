import '@toast-ui/editor/dist/toastui-editor.css';

import axios from 'axios';
import { SetStateAction, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BlueButton, CustomPagination, SortButton } from '../../../components';
import CountQuestions from '../../../components/CountQuestions/CountQuestions';
import PerPagination from '../../../components/PerPagination/PerPagination';
import LeftCounts from '../../../components/QuestionElement/LeftCounts/LeftCounts';
import QuestionElement from '../../../components/QuestionElement/QuestionElement';
import SortTab from '../../../components/SortTab/SortTab';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  changeQPage,
  changeQSortOption,
  resetQPage,
} from '../../../redux/reducers/qustionSortSlice';
import {
  Container,
  Footer,
  InfoContainer,
  MainContainer,
  PagenationButton,
  SortTabs,
  TitleContainer,
} from './style';
// 컴포넌트 수정 후 통합하기

const QuestionList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [page, setPage] = useState(1);
  const { questionList, page, sortOption } = useAppSelector(
    (state) => state.questionSort
  );
  const handleQSortBtnClick = useCallback(
    (name: string) => {
      dispatch(resetQPage());
      dispatch(changeQSortOption(name));
    },
    [dispatch]
  );
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
      <TitleContainer>
        <h1>All Questions</h1>
        <BlueButton onClick={() => navigate('/ask')}>Ask Question</BlueButton>
      </TitleContainer>
      <InfoContainer>
        <CountQuestions counts="counts" />
        <SortTabs>
          <SortButton
            nameList={['Newest', 'Views']}
            clickedName={sortOption}
            onClick={handleQSortBtnClick}
          />
        </SortTabs>
      </InfoContainer>
      <MainContainer>
        {questionList.map((questionList) => (
          <>
            <LeftCounts votes={0} answers={0} views={0} />
            <QuestionElement
              contents="contents"
              title="title"
              userName="Mark"
            />
          </>
        ))}
      </MainContainer>

      {/* <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer>
      <MainContainer>
        <LeftCounts votes={0} answers={0} views={0} />
        <QuestionElement contents="contents" title="title" userName="Mark" />
      </MainContainer> */}
      <Footer>
        <PagenationButton>
          <CustomPagination
            onChange={(number) => dispatch(changeQPage(number))}
            activePage={page}
            itemsCountPerPage={15} // 한 페이지에 표시할 게시글의 수
            totalItemsCount={750} // 서버에서 받아올 총 개수
          />
        </PagenationButton>
        {/* <PerPageButton>
          <PerPagination />
        </PerPageButton> */}
      </Footer>
    </Container>
  );
};

export default QuestionList;
