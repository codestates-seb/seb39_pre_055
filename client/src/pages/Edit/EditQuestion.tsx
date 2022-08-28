/* eslint-disable jsx-a11y/label-has-associated-control */

import { Editor } from '@toast-ui/react-editor';
import { KeyboardEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  BlueButton,
  CustomEditor,
  DefaultInput,
  EditHeader,
  EditSidebar,
  TagInput,
} from '../../components';
import { editQuestion, useAppDispatch } from '../../redux';
import { question } from '../../utils';

const Container = styled.div`
  padding: 24px;
  font-size: 15px;
  color: #0c0d0e;

  h2 {
    margin-bottom: 6px;
    font-weight: 600;
  }
`;

const EditorContainer = styled.div`
  margin-bottom: 30px;
`;

const CancelButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 3px;
  background-color: inherit;
  color: var(--blue-600);
  font-size: 13px;

  &:hover {
    background-color: var(--blue-100);
    transition: all 0.2s ease-in;
  }
`;

const EditQuestion = () => {
  // question, answer 타입에 따라 input 다르게 수정
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState('Stop an array while finding string');
  const [body, setBody] = useState(question);
  const [tagInput, setTagInput] = useState('');
  const [tagArr, setTagArr] = useState(['javascript', 'react']);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditorChange = useCallback(() => {
    if (editorRef.current) {
      setBody(editorRef.current?.getInstance().getMarkdown());
    }
  }, []);

  const handleInputOnKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (e.key === 'Enter' && target.value.trim() !== '') {
        setTagArr((prev) => [...prev, target.value]);
        setTagInput('');
      }
    },
    []
  );

  const handleEditButtonClick = useCallback(() => {
    dispatch(
      editQuestion({
        title,
        body,
        tags: tagArr,
      })
    );
    navigate(-1);
  }, [title, body, tagArr, dispatch, navigate]);

  return (
    <Container>
      <EditHeader />
      <DefaultInput
        label="Title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <EditorContainer>
        <h2>Body</h2>
        <CustomEditor
          value={body}
          editorRef={editorRef}
          onChange={handleEditorChange}
        />
      </EditorContainer>
      <TagInput
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyUp={handleInputOnKeyUp}
        tagArr={tagArr}
      />
      <BlueButton width="90px" onClick={handleEditButtonClick}>
        Save Edits
      </BlueButton>
      <CancelButton onClick={() => navigate(-1)}>Cancel</CancelButton>
      <EditSidebar />
    </Container>
  );
};

export default EditQuestion;
