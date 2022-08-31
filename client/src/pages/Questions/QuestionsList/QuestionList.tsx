import axios from 'axios';
import { SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BlueButton, CustomPagination } from '../../../components';
import CountQuestions from '../../../components/CountQuestions/CountQuestions';
import LeftCounts from '../../../components/QuestionElement/LeftCounts/LeftCounts';
import QuestionElement from '../../../components/QuestionElement/QuestionElement';
import SortTab from '../../../components/SortTab/SortTab';
import { questionList } from '../../../utils';
import { PaginationContainer } from '../../Tags/style';
import {
  Container,
  Footer,
  InfoContainer,
  MainContainer,
  PagenationButton,
  PerPageButton,
  SortTabs,
  TitleContainer,
} from './style';
// 컴포넌트 수정 후 통합하기/

const QuestionList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const handlePageChange = (page: SetStateAction<number>) => {
    setPage(page);
    return (
      <CustomPagination
        activePage={20}
        itemsCountPerPage={15}
        totalItemsCount={750}
        pageRangeDisplayed={5}
        // prevPageText="Prev"
        // nextPageText="Next"
        onChange={handlePageChange}
      />
    );
  };
  return (
    <Container>
      <TitleContainer>
        <h1>All Questions</h1>
        <BlueButton onClick={() => navigate('/ask')}>Ask Question</BlueButton>
      </TitleContainer>
      <InfoContainer>
        <CountQuestions counts="22931208" />
        <SortTabs>
          <SortTab Newest="Newest" Views="Views" />
        </SortTabs>
      </InfoContainer>
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
      <Footer>
        <PagenationButton>
          <CustomPagination
            onChange={handlePageChange}
            activePage={15}
            itemsCountPerPage={750}
            totalItemsCount={15}
          />
        </PagenationButton>
        <PerPageButton>
          <CustomPagination
            onChange={handlePageChange}
            activePage={15}
            itemsCountPerPage={750}
            totalItemsCount={15}
          />
        </PerPageButton>
      </Footer>
    </Container>
  );
};

export default QuestionList;
