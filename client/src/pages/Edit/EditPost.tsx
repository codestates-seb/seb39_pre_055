/* eslint-disable jsx-a11y/label-has-associated-control */

import { Editor } from '@toast-ui/react-editor';
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BlueButton,
  CustomEditor,
  DefaultInput,
  EditHeader,
  EditSidebar,
  TagInput,
} from '../../components';
import { ENG_REGEX } from '../../constants/regex';
import { useInput } from '../../hooks';
import {
  editAnswer,
  editQuestion,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import {
  ButtonsContainer,
  CancelButton,
  Container,
  EditorContainer,
  SMain,
  TagsContainer,
  TitleContainer,
} from './style';

const EditQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const editorRef = useRef<Editor>(null);
  const { data, editType, editBody, editAnswerId } = useAppSelector(
    (state) => state.detail
  );
  const [title, titleHandler] = useInput(data?.title as string);
  const [titleError, setTitleError] = useState(false);
  const [body, setBody] = useState(data?.body as string);
  const [bodyError, setBodyError] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [tagArr, setTagArr] = useState(data?.questionTags as string[]);
  const [tagError, setTagError] = useState(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (title.trim().length > 14) {
      setTitleError(false);
    }
    titleHandler(e);
  };

  const handleEditorChange = useCallback(() => {
    if (
      editorRef.current &&
      editorRef.current?.getInstance().getMarkdown().length > 29
    ) {
      setBodyError(false);
    }
    if (editorRef.current) {
      setBody(editorRef.current?.getInstance().getMarkdown());
    }
  }, []);

  const handleTagInputOnKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (
        e.key === 'Enter' &&
        target.value.trim() !== '' &&
        !tagArr.includes(target.value)
      ) {
        setTagError(false);
        setTagArr((prev) => [...prev, target.value]);
        setTagInput('');
      }
    },
    [tagArr]
  );

  const handleTagInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (ENG_REGEX.test(value)) {
      setTagInput(value);
    }
  };

  const handleTagDelete = (name: string) => {
    const deletedTags = tagArr.filter((tag) => tag !== name);
    setTagArr(deletedTags);
  };

  const handleSubmit = useCallback(() => {
    if (editType === 'question') {
      if (
        tagArr.length === 0 ||
        title.trim().length < 15 ||
        body.trim().length < 30
      ) {
        if (tagArr.length === 0) setTagError(true);
        if (title.length < 15) setTitleError(true);
        if (body.length < 29) setBodyError(true);
        return;
      }
      dispatch(
        editQuestion({
          id: data?.questionId as string,
          title,
          body,
          questionTags: tagArr,
        })
      );
    }

    if (editType === 'answer') {
      if (body.trim().length < 30) {
        setBodyError(true);
        return;
      }
      dispatch(
        editAnswer({
          answerId: editAnswerId,
          body,
        })
      );
    }
    navigate(-1);
  }, [
    title,
    body,
    tagArr,
    navigate,
    editType,
    data?.questionId,
    dispatch,
    editAnswerId,
  ]);

  return (
    <Container>
      <SMain>
        <EditHeader />
        {editType === 'question' && (
          <TitleContainer>
            <DefaultInput
              label="Title"
              id="title"
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              value={title}
              isError={titleError}
              onChange={handleTitleChange}
            />
          </TitleContainer>
        )}
        <EditorContainer>
          <h2>Body</h2>
          <CustomEditor
            value={editBody}
            editorRef={editorRef}
            isError={bodyError}
            onChange={handleEditorChange}
          />
        </EditorContainer>
        {editType === 'question' && (
          <TagsContainer>
            <TagInput
              value={tagInput}
              tagArr={tagArr}
              isError={tagError}
              placeholder="e.g. (angular sql-server string)"
              onChange={handleTagInputChange}
              onKeyUp={handleTagInputOnKeyUp}
              onClick={handleTagDelete}
            />
          </TagsContainer>
        )}
        <ButtonsContainer>
          <BlueButton width="90px" onClick={handleSubmit}>
            Save Edits
          </BlueButton>
          <CancelButton onClick={() => navigate(-1)}>Cancel</CancelButton>
        </ButtonsContainer>
      </SMain>
      <EditSidebar />
    </Container>
  );
};

export default EditQuestion;
