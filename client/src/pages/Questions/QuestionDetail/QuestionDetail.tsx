/* eslint-disable consistent-return */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */

import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  AnswerEditor,
  Aside,
  BlueButton,
  Content,
  LoadingSpinner,
  NotFound,
  QuestionInfo,
} from '../../../components';
import { Modal } from '../../../components/Modal';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { getDetail, sortAnswers } from '../../../redux/actions/detailAction';
import {
  AnswerHeader,
  Container,
  Header,
  SMain,
  SubHeader,
  Wrapper,
} from './style';

const QuestionDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(params.id as string));
  }, [dispatch, params, data?.body]);

  if (isLoading)
    return (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );

  if (data?.questionStatus === 'QUESTION_NOT_EXIST') {
    return <NotFound />;
  }

  if (data)
    return (
      <Modal width="1px" height="1px" background>
        <Container>
          {/* question */}
          <Header>
            <h1>{data.title}</h1>
            <div>
              <BlueButton
                width="120px"
                height="35px"
                onClick={() => navigate('/ask')}
              >
                Ask Questions
              </BlueButton>
            </div>
          </Header>
          <SubHeader>
            <QuestionInfo option="Asked" value={data.createdAt} />
            <QuestionInfo option="Modified" value={data.updatedAt} />
            <QuestionInfo option="Viewed" value={data.view} isViewd={true} />
          </SubHeader>
          <SMain>
            <section>
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
                        onChange={(e) => {
                          dispatch(
                            sortAnswers({
                              questionId: params.id as string,
                              value: e.target.value,
                            })
                          );
                        }}
                      >
                        <option value="vote">Highest score (default)</option>
                        <option value="createdAt">
                          Date created (newest first)
                        </option>
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
            </section>
            <Aside />
          </SMain>
        </Container>
      </Modal>
    );

  return <div />;
};

export default QuestionDetail;
