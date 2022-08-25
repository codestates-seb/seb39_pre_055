/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';

import { AnswerEditor, Content, QuestionInfo } from '../../../components';
import { useAppSelector } from '../../../redux';

const Container = styled.div`
  padding: 24px;
  border-left: 1px solid rgb(227, 230, 232);

  h3 {
    font-size: 19px;
    color: #232629;
    margin: 20px 0;
  }
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
    color: #232629;
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

const Button = styled.button`
  width: 100px;
  height: 35px;
  padding: 10px;
  font-size: 13px;
  color: white;
  background-color: #0a95ff;
  border: none;
  border-radius: 3px;
`;

const QuestionDetail = () => {
  const { question, answerList } = useAppSelector((state) => state.question);
  return (
    <Container>
      {/* question */}
      <Header>
        <h1>Stop an array while finding string</h1>
        <Button>Ask Question</Button>
      </Header>
      <SubHeader>
        <QuestionInfo option="Asked" value="today" />
        <QuestionInfo option="Modified" value="today" />
        <QuestionInfo option="Viewed" value="5 times" />
      </SubHeader>
      <Content type="question" body={question} />
      {/* answer */}
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
      {answerList.map((answer) => (
        <Content key={answer} type="answer" body={answer} />
      ))}
      {/* editor */}
      <h3>Your Answer</h3>
      <AnswerEditor />
    </Container>
  );
};

export default QuestionDetail;
