/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */

import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, useParams } from 'react-router-dom';

import {
  AnswerEditor,
  BlueButton,
  Content,
  QuestionInfo,
} from '../../../components';
import { useAppSelector } from '../../../redux';
import { AnswerHeader, Container, Header, SubHeader } from './style';

const QuestionDetail = () => {
  const params = useParams();
  console.log(params.id);
  const navigate = useNavigate();
  const { title, body, vote, view, user, questionTags, createdAt, updatedAt } =
    useAppSelector((state) => state.detail);

  return (
    <Container>
      {/* question */}
      <Header>
        <h1>{title}</h1>
        <BlueButton
          width="120px"
          height="35px"
          onClick={() => navigate('/ask')}
        >
          Ask Questions
        </BlueButton>
      </Header>
      <SubHeader>
        <QuestionInfo option="Asked" value={createdAt} />
        <QuestionInfo option="Modified" value={updatedAt} />
        <QuestionInfo option="Viewed" value={view} isViewd={true} />
      </SubHeader>
      <Content
        type="question"
        body={body}
        tags={questionTags}
        user={user}
        createdAt={createdAt}
        vote={vote}
      />
      {/* answer */}
      {/* <AnswerHeader>
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
      ))} */}
      {/* editor */}
      <h3>Your Answer</h3>
      <AnswerEditor />
    </Container>
  );
};

export default QuestionDetail;
