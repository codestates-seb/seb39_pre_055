import styled from 'styled-components';

import AskQuestionsButton from '../../../components/AskQuestionsButton/AskQuestionsButton';
import CountQuestions from '../../../components/CountQuestions/CountQuestions';
import LeftCounts from '../../../components/QuestionElement/LeftCounts/LeftCounts';
import QuestionElement from '../../../components/QuestionElement/QuestionElement';
import SortTab from '../../../components/SortTab/SortTab';
// 컴포넌트 수정 후 통합하기

const Container = styled.div`
  border-left: 0.2px solid var(--black-100);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 23px 23px 0px 23px;

  h1 {
    font-size: 27px;
    color: var(--fc-dark);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  padding: 0px 23px 0px 23px;
`;

const SortTabs = styled.span`
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.2px solid var(--black-100);
`;

// 하단페이지네이션탭 예시용
const Footer = styled.span`
  display: flex;
  justify-content: space-between;
`;

const PagenationButton = styled.span`
  display: flex;
  margin-top: 50px;
  margin-left: 40px;

  button {
    margin: 0.8px;
    font-size: 2px;
  }
`;

const PerPageButton = styled.span`
  display: flex;
  margin: 50px 0px 0px 180px;

  button {
    margin: 0.8px;
    font-size: 2px;
  }
`;

const QuestionList = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>All Questions</h1>
        <AskQuestionsButton name="Ask Question" />
      </TitleContainer>
      <InfoContainer>
        <CountQuestions counts={22931208} />
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
