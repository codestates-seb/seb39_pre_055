import styled from 'styled-components';

import CountQuestions from '../../../components/CountQuestions/CountQuestions';
import QuestionElement from '../../../components/QuestionElement/QuestionElement';
import SortTab from '../../../components/SortTab/SortTab';
import Tag from '../../../components/Tag/Tag';

const Container = styled.div`
  padding: 23px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h1 {
    font-size: 22px;
    color: var(--fc-dark);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SortTabs = styled.span`
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  border-top: 0.2px solid var(--black-100);
`;

const Tags = styled.div`
  margin: 24px 0;
`;

const QuestionList = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>All Questions</h1>
        <button type="button">Ask Question</button>
      </TitleContainer>
      <InfoContainer>
        <span>
          <CountQuestions counts={22931208} />
        </span>
        <span>
          <SortTabs>
            <SortTab Relevance="Relavance" Newest="Newest" Views="Views" />
          </SortTabs>
        </span>
      </InfoContainer>
      <span>
        <MainContainer>
          <QuestionElement
            contents="content"
            title="title"
            // votes={0}
            // answers={0}
            // views={0}
          />
          <Tags>
            <Tag name="javascript" />
            <Tag name="json" />
            <Tag name="html" />
          </Tags>
        </MainContainer>
      </span>
    </Container>
  );
};

export default QuestionList;
