import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import { Editor } from '@toast-ui/react-editor';
import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { addAnswer, useAppDispatch, useAppSelector } from '../../../redux';
import { BlueButton } from '../../Button/Templates';
import CustomEditor from '../CustomEditor/CustomEditor';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 20px;

  & > p {
    color: #6a737c;
    font-style: italic;
    vertical-align: middle;

    & > a > span {
      color: #0074cc;
    }
  }
`;

const AnswerEditor = () => {
  const editorRef = useRef<Editor>(null);
  const [value, setValue] = useState(' ');
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const { data, isPostLoading } = useAppSelector((state) => state.detail);
  const { user } = useAppSelector((state) => state.user);

  const handleEditorChange = useCallback(() => {
    if (value.length > 29) setIsError(false);
    if (editorRef.current) {
      setValue(editorRef.current?.getInstance().getMarkdown());
    }
  }, [value]);

  const handleSubmit = useCallback(() => {
    if (value.length < 30) {
      setIsError(true);
      return;
    }
    if (data?.questionId) {
      dispatch(addAnswer({ questionId: data.questionId, body: value }));
    }
  }, [value, dispatch, data?.questionId]);

  return (
    <Container>
      <CustomEditor
        height="300px"
        value={value}
        isError={isError}
        editorRef={editorRef}
        onChange={handleEditorChange}
      />
      <ButtonContainer>
        <BlueButton
          width="180px"
          height="35px"
          onClick={handleSubmit}
          isPending={isPostLoading}
          disabled={user === null}
        >
          Post Your Answer
        </BlueButton>
        {!user && (
          <p>
            You need to{' '}
            <Link to="/login">
              <span>login</span>
            </Link>{' '}
            or{' '}
            <Link to="/signup">
              <span>signup</span>
            </Link>{' '}
            to add an answer.
          </p>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default AnswerEditor;
