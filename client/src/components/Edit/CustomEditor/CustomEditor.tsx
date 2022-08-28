import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const EditorBorder = styled.div<{ isFocus: boolean }>`
  ${({ isFocus }) =>
    isFocus &&
    css`
      border-radius: 3px;
      border-color: var(--blue-300);
      outline: var(--blue-100) solid 4px;
    `}
`;

interface Prop {
  value: string;
  editorRef: React.RefObject<Editor>;
  onChange: () => void;
}

const CustomEditor = ({ value, editorRef, onChange }: Prop) => {
  const [isEditorFocus, setIsEditorFocus] = useState(false);
  return (
    <EditorBorder isFocus={isEditorFocus}>
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
    </EditorBorder>
  );
};

export default CustomEditor;
