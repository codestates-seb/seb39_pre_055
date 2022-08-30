import axios from 'axios';
import { useSelector } from 'react-redux';

import { BlueButton } from '../../../components';
import CountQuestions from '../../../components/CountQuestions/CountQuestions';
import LeftCounts from '../../../components/QuestionElement/LeftCounts/LeftCounts';
import QuestionElement from '../../../components/QuestionElement/QuestionElement';
import SortTab from '../../../components/SortTab/SortTab';
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
  //   const [page: Number, setPage] = useState(1);

  //   const handlePageChange = (page) => {
  //     setPage(page);
  //   };

  //   return (
  //     <Pagination
  //       activePage={page}
  //       itemsCountPerPage={15}
  //       totalItemsCount={}
  //       pageRangeDisplayed={15}
  //       prevPageText={"Prev"}
  //       nextPageText={"Next"}
  //       onChange={handlePageChange}
  //     />
  //   );
  // };

  return (
    <Container>
      <TitleContainer>
        <h1>All Questions</h1>
        <BlueButton>Ask Question</BlueButton>
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
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">...</button>
          <button type="button">페이지수</button>
          <button type="button">Next</button>
        </PagenationButton>
        <PerPageButton>
          <button type="button">15</button>
          <button type="button">30</button>
          <button type="button">50</button>
          <button type="button">per page</button>
        </PerPageButton>
      </Footer>
    </Container>
  );
};

export default QuestionList;
