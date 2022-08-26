/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useEffect } from 'react';

import { AnswerEditor, Content, QuestionInfo } from '../../../components';
import { useAppSelector } from '../../../redux';
import { AnswerHeader, Button, Container, Header, SubHeader } from './style';

const QuestionDetail = () => {
  const { question, answerList } = useAppSelector((state) => state.question);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }, []);

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
