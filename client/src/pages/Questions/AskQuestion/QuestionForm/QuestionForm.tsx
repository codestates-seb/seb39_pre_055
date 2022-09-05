/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { Editor } from '@toast-ui/react-editor';
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  KeyboardEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from 'styled-components';

import {
  BlueButton,
  CustomEditor,
  DefaultInput,
  TagInput,
} from '../../../../components';
import { useAppSelector } from '../../../../redux';
import { axiosInstance } from '../../../../utils/axiosInstance';
import Caption from '../MDCaptions/MDCaptions';
import { SCaptionBox } from '../MDCaptions/style';
import {
  ButtonBox,
  SBodySection,
  SBox,
  SCommentP,
  SForm,
  SLabel,
} from './style';

const captionsList = [
  { caption: '```code```' },
  {
    caption: '**bold**',
    mdStyle: css`
      font-weight: bold;
    `,
  },
  {
    caption: '*italic',
    mdStyle: css`
      font-style: italic;
    `,
  },
  { caption: '> quote' },
];

interface QuestionFormProps {
  errCount: number;
  setErrs: Dispatch<SetStateAction<{ status: string; count: number }>>;
}

const QuestionForm = ({ errCount, setErrs }: QuestionFormProps) => {
  const [title, setTitle] = useState({ value: '', isError: false });
  const [body, setBody] = useState({ value: ' ', isError: false });
  const [tags, setTags] = useState<{ value: string[]; isError: boolean }>({
    value: [],
    isError: false,
  });
  const [tagInput, setTagInput] = useState('');
  const [isPending, setIsPending] = useState(false);
  const editorRef = useRef<Editor>(null);
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user.user) || {};


  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let error = false;

      if (title.value.trim().length <= 14) {
        error = true;
      }
      setTitle({ value: e.target.value, isError: error });
    },
    [title]
  );

  const handleEditorChange = useCallback(() => {
    if (!editorRef.current) return;

    const bodyLength = editorRef.current.getInstance().getMarkdown().length;
    if (bodyLength < 30) {
      setBody((prev) => ({ ...prev, isError: true }));
      return;
    }
    setBody({
      value: editorRef.current.getInstance().getMarkdown(),
      isError: false,
    });
  }, []);

  const handleAddTags = useCallback(
    (e: any) => {
      if (e.key !== 'Enter') return;
      if (tagInput === '') {
        setTags((prev) => ({ ...prev, isError: true }));
        return;
      }

      setTags((prev) => ({
        value: prev.value.concat(tagInput),
        isError: false,
      }));
      setTagInput('');
    },
    [tagInput]
  );

  const handleDeleteTag = useCallback((tag: string) => {
    setTags((prev) => {
      const filtered = prev.value.filter((t) => t !== tag);
      return { ...prev, value: filtered };
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!isPending) return;
    const controller = new AbortController();

    (async () => {
      try {
        const reqBody = {
          userId: '1',
          title: title.value,
          body: body.value,
          questionTags: tags.value,
        };
        const res = await axiosInstance.post(
          '/v1/user/question/write',
          reqBody,
          {
            signal: controller.signal,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { questionId } = res.data.data;

        navigate(`/${questionId}`);
      } catch (error: any) {
        const { status, message } = error.response.data;
        toast.error(`${status}: ${message}`);
      }
    })();

    return () => controller.abort();
  }, [isPending]);

  const handleReview = () => {
    const titleErr = Number(title.isError || !title.value);
    const bodyErr = Number(body.isError || !body.value.trim());
    const tagErr = Number(tags.isError || !tags.value.length);
    const errIssues = titleErr + bodyErr + tagErr;

    if (titleErr) {
      setTitle((prev) => ({ ...prev, isError: true }));
    }
    if (bodyErr) {
      setBody((prev) => ({ ...prev, isError: true }));
    }
    if (tagErr) {
      setTags((prev) => ({ ...prev, isError: true }));
    }

    setErrs({ status: 'ongoing', count: errIssues });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (errIssues < 1) {
      setIsPending(true);
    }
  };
  const suppressFormEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SForm onSubmit={handleSubmit} onKeyDown={(e) => suppressFormEnter(e)}>
      <SBodySection>
        <SBox>
          <DefaultInput
            label="Title"
            id="title"
            value={title.value}
            isError={title.isError}
            onChange={(e) => handleTitleChange(e)}
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            comment="Be specific and imagine you’re asking a question to another person"
          />
        </SBox>

        <SBox>
          <SLabel>Body</SLabel>
          <SCommentP>
            Include all the information someone would need to answer your
            question
          </SCommentP>
          <CustomEditor
            value={body.value}
            isError={body.isError}
            editorRef={editorRef}
            onChange={handleEditorChange}
          />
          <SCaptionBox>
            {captionsList.map(({ caption, mdStyle }) => (
              <Caption caption={caption} mdStyle={mdStyle} key={caption} />
            ))}
          </SCaptionBox>
        </SBox>
        <SBox>
          <TagInput
            value={tagInput}
            comment="Add up to 5 tags to describe what your question is about"
            placeholder="e.g. (angular sql-server string)"
            marginBottom="0px"
            tagArr={tags.value}
            isError={tags.isError}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyUp={(e) => handleAddTags(e)}
            onClick={(e) => handleDeleteTag(e)}
          />
        </SBox>
      </SBodySection>
      <ButtonBox>
        <BlueButton
          height="37px"
          onClick={handleReview}
          isPending={isPending}
          isError={errCount > 0}
        >
          Review your question
        </BlueButton>
      </ButtonBox>
    </SForm>
  );
};

export default QuestionForm;
