/* eslint-disable react/jsx-boolean-value */
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useRef } from 'react';

const AnswerEditor = () => {
  const editorRef = useRef<Editor>(null);

  const handleEditorChange = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <div>
      <Editor
        previewStyle="vertical"
        height="300px"
        initialValue=" "
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
    </div>
  );
};

export default AnswerEditor;
