import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import { Editor } from '@toast-ui/react-editor';
import { useCallback, useRef, useState } from 'react';
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
  margin-top: 30px;
`;

const AnswerEditor = () => {
  const editorRef = useRef<Editor>(null);
  const [value, setValue] = useState(' ');
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const { data, isPostLoading } = useAppSelector((state) => state.detail);

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
        >
          Post Your Answer
        </BlueButton>
      </ButtonContainer>
    </Container>
  );
};

export default AnswerEditor;
