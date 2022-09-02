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
import {
  changeDetailSortOption,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { getDetail } from '../../../redux/actions/detailAction';
import { AnswerHeader, Container, Header, SubHeader } from './style';

const QuestionDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { data, sortOption } = useAppSelector((state) => state.detail);

  useEffect(() => {
    if (params.id) {
      dispatch(getDetail(params.id));
    }
  }, [dispatch, params, sortOption]);

  if (data?.questionStatus === 'QUESTION_NOT_EXIST') {
    return <div>not found</div>;
  }

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
        {data.answers && (
          <>
            <AnswerHeader>
              <h2>{data.answers.data.length} Answers</h2>
              <div>
                <label htmlFor="sort">Sorted by:</label>
                <select
                  name="sort"
                  id="sort"
                  onChange={(e) =>
                    dispatch(changeDetailSortOption(e.target.value))
                  }
                >
                  <option value="vote">Highest score (default)</option>
                  <option value="createdAt">Date created (newest first)</option>
                </select>
              </div>
            </AnswerHeader>
            {data.answers.data.map((answer) => (
              <Content
                key={answer.answerId}
                type="answer"
                body={answer.body}
                user={answer.user}
                createdAt={answer.createdAt}
                vote={answer.vote}
                answerId={answer.answerId}
              />
            ))}
          </>
        )}
        {/* editor */}
        <h3>Your Answer</h3>
        <AnswerEditor />
      </Container>
    );

  return <div>not found</div>;
};

export default QuestionDetail;
