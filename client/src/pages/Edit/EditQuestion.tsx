/* eslint-disable jsx-a11y/label-has-associated-control */

import { Editor } from '@toast-ui/react-editor';
import React, { KeyboardEvent, useCallback, useRef, useState } from 'react';
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
import { useInput } from '../../hooks';
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
  const [title, titleHandler] = useInput('Stop an array while finding string');
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
      if (
        e.key === 'Enter' &&
        target.value.trim() !== '' &&
        !tagArr.includes(target.value)
      ) {
        setTagArr((prev) => [...prev, target.value]);
        setTagInput('');
      }
    },
    [tagArr]
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

  const handleDeleteTag = useCallback(
    (name: string) => {
      const deletedTags = tagArr.filter((tag) => tag !== name);
      setTagArr(deletedTags);
    },
    [tagArr]
  );

  return (
    <Container>
      <EditHeader />
      <DefaultInput
        label="Title"
        id="title"
        value={title as string}
        onChange={(e) => titleHandler(e)}
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
        onClick={handleDeleteTag}
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
