/* eslint-disable consistent-return */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */

import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  AnswerEditor,
  BlueButton,
  Content,
  QuestionInfo,
} from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { getDetail } from '../../../redux/actions/detailAction';
import { AnswerHeader, Container, Header, SubHeader } from './style';

const QuestionDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (params.id) {
      dispatch(getDetail(params.id));
    }
  }, [dispatch, params]);

  const navigate = useNavigate();
  const { isLoading, data } = useAppSelector((state) => state.detail);

  if (isLoading) return <p>Loading...</p>;

  if (data)
    return (
      <Container>
        {/* question */}
        <Header>
          <h1>{data.title}</h1>
          <BlueButton
            width="120px"
            height="35px"
            onClick={() => navigate('/ask')}
          >
            Ask Questions
          </BlueButton>
        </Header>
        <SubHeader>
          <QuestionInfo option="Asked" value={data.createdAt} />
          <QuestionInfo option="Modified" value={data.updatedAt} />
          <QuestionInfo option="Viewed" value={data.view} isViewd={true} />
        </SubHeader>
        <Content
          type="question"
          body={data.body}
          tags={data.questionTags}
          user={data.user}
          createdAt={data.createdAt}
          vote={data.vote}
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
        </AnswerHeader> */}
        {/* {answerList.map((answer) => (
          <Content key={answer} type="answer" body={answer} />
        ))}{' '} */}
        {/* editor */}
        <h3>Your Answer</h3>
        <AnswerEditor />
      </Container>
    );

  return <div>not found</div>;
};

export default QuestionDetail;
