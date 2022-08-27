/* eslint-disable react/jsx-boolean-value */
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { addAnswer, useAppDispatch } from '../../redux';
import { BlueButton } from '../Button/Templates';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AnswerEditor = () => {
  const editorRef = useRef<Editor>(null);
  const [value, setValue] = useState(' ');

  const dispatch = useAppDispatch();

  const handleEditorChange = useCallback(() => {
    if (editorRef.current) {
      setValue(editorRef.current?.getInstance().getMarkdown());
    }
  }, []);

  return (
    <Container>
      <Editor
        initialValue={value}
        useCommandShortcut={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} // 코드블럭 하이라이트
        toolbarItems={[
          ['bold', 'italic', 'strike'],
          ['code', 'codeblock'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
        ]}
        ref={editorRef}
        onChange={handleEditorChange}
      />
      <BlueButton width="140px" height="35px">
        Post Your Answer
      </BlueButton>
    </Container>
  );
};

export default AnswerEditor;
