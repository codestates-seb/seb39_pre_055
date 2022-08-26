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

const PostButton = styled.button`
  height: 35px;
  width: 130px;
  margin-top: 10px;
  padding: 10px;
  font-size: 13px;
  color: white;
  background-color: #0a95ff;
  border: none;
  border-radius: 3px;
`;

const AnswerEditor = () => {
  const editorRef = useRef<Editor>(null);
  const [value, setValue] = useState(' ');

  const dispatch = useAppDispatch();

  const handleEditorChange = useCallback(() => {
    if (editorRef.current) {
      console.log(editorRef.current?.getInstance().getMarkdown());
      setValue(editorRef.current?.getInstance().getMarkdown());
    }
  }, []);

  return (
    <div>
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
      <PostButton type="button" onClick={() => dispatch(addAnswer(value))}>
        Post Your Answer
      </PostButton>
    </div>
  );
};

export default AnswerEditor;
