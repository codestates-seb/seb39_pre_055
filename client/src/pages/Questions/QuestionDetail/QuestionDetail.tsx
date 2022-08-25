/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';

import { Content, QuestionInfo } from '../../../components';

const Container = styled.div`
  padding: 24px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h1 {
    font-size: 27px;
    color: var(--black-700);
  }
`;

const SubHeader = styled.section`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--black-100);

  div {
    margin-bottom: 8px;
    margin-right: 16px;
    font-size: 13px;
  }

  span {
    margin-right: 2px;
    color: var(--black-500);
  }

  strong {
    color: var(--black-800);
  }
`;

const AnswerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  color: #232629;

  h2 {
    display: flex;
    align-items: center;
    font-size: 19px;
    font-weight: 500;
  }

  label {
    font-size: 12px;
  }

  select {
    width: 260px;
    padding: 6px 32px 6px 9px;
    margin-left: 3px;
    color: #0c0e0d;
    font-size: 13px;
  }
`;

const QuestionDetail = () => {
  return (
    <Container>
      <Header>
        <h1>Stop an array while finding string</h1>
        <button type="button">Ask Question</button>
      </Header>
      <SubHeader>
        <QuestionInfo option="Asked" value="today" />
        <QuestionInfo option="Modified" value="today" />
        <QuestionInfo option="Viewed" value="5 times" />
      </SubHeader>
      <Content background={true} />
      <AnswerHeader>
        <h2>2 Answers</h2>
        <div>
          <label htmlFor="sort">Sorted by:</label>
          <select name="sort" id="sort">
            <option value="score">Highest score (default)</option>
            <option value="new">Date modified (newest first)</option>
            <option value="old">Date created (oldest first)</option>
          </select>
        </div>
      </AnswerHeader>
      <Content background={false} />
      <Content background={false} />
    </Container>
  );
};

export default QuestionDetail;
