import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useState } from 'react';
import { MdError } from 'react-icons/md';
import styled, { css } from 'styled-components';

const EditorBorder = styled.div<{ isFocus: boolean; isError: boolean }>`
  position: relative;
  margin-bottom: 10px;

  svg {
    position: absolute;
    top: 230px;
    right: 10px;
    color: hsl(358, 68%, 59%);
    font-size: 20px;
  }

  ${({ isFocus, isError }) =>
    isFocus &&
    !isError &&
    css`
      border-radius: 3px;
      border-color: var(--blue-300);
      outline: var(--blue-100) solid 4px;
    `}

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid hsl(358, 68%, 59%);
      border-radius: 3px;
      outline: hsl(358, 76%, 90%) solid 4px;
    `}
`;

const ErrorMsg = styled.p`
  margin-top: 10px;
  margin-bottom: 30px;
  color: hsl(358, 62%, 52%);
  font-size: 12px;
`;

interface Prop {
  value: string;
  isError: boolean;
  editorRef: React.RefObject<Editor>;
  onChange: () => void;
}

const CustomEditor = ({ value, isError, editorRef, onChange }: Prop) => {
  const [isEditorFocus, setIsEditorFocus] = useState(false);
  return (
    <>
      <EditorBorder isFocus={isEditorFocus} isError={isError}>
        <Editor
          initialValue={value}
          height="500px"
          useCommandShortcut
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} // 코드블럭 하이라이트
          toolbarItems={[
            ['bold', 'italic', 'strike'],
            ['code', 'codeblock'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
          ]}
          autofocus={false}
          ref={editorRef}
          onChange={onChange}
          onFocus={() => setIsEditorFocus(true)}
          onBlur={() => setIsEditorFocus(false)}
        />
        {isError && <MdError />}
      </EditorBorder>
      {isError && <ErrorMsg>Body must be at least 30 characters.</ErrorMsg>}
    </>
  );
};

export default CustomEditor;
