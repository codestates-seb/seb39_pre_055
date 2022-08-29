import { Editor } from '@toast-ui/react-editor';
import { FormEvent, useCallback, useRef, useState } from 'react';
import { css } from 'styled-components';

import {
  BlueButton,
  CustomEditor,
  DefaultInput,
  TagInput,
} from '../../../../components';
import Caption from '../MDCaptions/MDCaptions';
import { SCaptionBox } from '../MDCaptions/style';
import {
  ButtonBox,
  SBodySection,
  SBox,
  SCommentP,
  SDiv,
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

const QuestionForm = () => {
  const [title, setTitle] = useState({ value: '', isError: false });
  const [body, setBody] = useState({ value: ' ', isError: false });
  const [tags, setTags] = useState({ value: [], isError: false });
  const [tagInput, setTagInput] = useState('');
  const editorRef = useRef<Editor>(null);

  const handleEditorChange = useCallback(() => {
    if (!editorRef.current) return;

    const bodyLength = editorRef.current?.getInstance().getMarkdown().length;
    if (bodyLength < 30) {
      setBody((prev) => ({ ...prev, isError: true }));
      return;
    }
    setBody({
      ...body,
      value: editorRef.current?.getInstance().getMarkdown(),
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('form');
  };

  return (
    <SDiv onSubmit={handleSubmit}>
      <SBodySection>
        <DefaultInput
          label="Title"
          id="title"
          value={title.value}
          isError={title.isError}
          onChange={(e) => setTitle({ ...title, value: e.target.value })}
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          comment="Be specific and imagine you’re asking a question to another person"
        />
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
            onKeyUp={(e) => 'r'}
            onClick={() => console.log('')}
          />
        </SBox>
      </SBodySection>
      <ButtonBox>
        <BlueButton width="150px" height="37px">
          Review your question
        </BlueButton>
      </ButtonBox>
    </SDiv>
  );
};

export default QuestionForm;
