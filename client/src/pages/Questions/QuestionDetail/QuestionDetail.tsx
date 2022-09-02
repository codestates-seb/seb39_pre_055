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
  EditSidebar,
  NotFound,
  QuestionInfo,
} from '../../../components';
import {
  changeDetailSortOption,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { getDetail } from '../../../redux/actions/detailAction';
import {
  AnswerHeader,
  Container,
  Header,
  Side,
  Sidebar,
  SMain,
  SubHeader,
} from './style';

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
    return <NotFound />;
  }

  if (data)
    return (
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
                      onChange={(e) =>
                        dispatch(changeDetailSortOption(e.target.value))
                      }
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
          <Side>
            <Sidebar>
              <header>The Overflow Blog</header>
              <ul>
                <li>ideal fit for developing blockchains</li>
                <li>Environments on-demand (Ep. 479)</li>
                <li>Add related resources or links</li>
                <li>Always respect the author’s intent</li>
                <li>Don’t use edits to reply to the author</li>
              </ul>
              <header>Featured on Meta</header>
              <ul>
                <li>Student Ambassador Program</li>
                <li>Google Analytics 4 (GA4) upgrade</li>
                <li>Question Lifecycle</li>
                <li>The [option] tag is being burninated</li>
                <li>WSO2 launches, and Google Go sunsets</li>
              </ul>
            </Sidebar>
            <a href="https://www.udemy.com/" target="_blank" rel="noreferrer">
              <img
                src="https://tpc.googlesyndication.com/simgad/8943515588817423167"
                alt="udemy"
              />
            </a>
            <EditSidebar width="100%" />
          </Side>
        </SMain>
      </Container>
    );

  return <div>not found</div>;
};

export default QuestionDetail;
