/* eslint-disable jsx-a11y/label-has-associated-control */
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BlueButton, EditHeader, Tag } from '../../components';
import { editQuestion, useAppDispatch } from '../../redux';
import { question } from '../../utils';

const Container = styled.div`
  padding: 24px;
  font-size: 15px;
  color: #0c0d0e;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
    font-weight: 600;
  }

  input {
    margin-bottom: 30px;
    padding: 8px 10px;
    width: 100%;
    height: 35px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
  }

  h2 {
    margin-bottom: 6px;
    font-weight: 600;
  }
`;

const EditorContainer = styled.div`
  margin-bottom: 30px;
`;

const HashTagContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  input {
    border: none;
    margin-bottom: 0;

    &:focus {
      outline: none;
    }
  }
`;

const HashTags = styled.div`
  display: flex;
  margin: auto 0;
  padding-left: 10px;
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

const Sidebar = styled.div`
  aside {
    width: 360px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid hsl(47, 65%, 84%);
    background-color: hsl(47, 83%, 91%);
    color: rgb(59, 64, 69);
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
  }

  header {
    padding: 12px 15px;
    border-bottom: 1px solid hsl(47, 65%, 84%);
    font-size: 15px;
  }

  ul {
    padding: 4px 15px;
    background-color: #faf5e6;
  }

  li {
    margin: 12px 0;
    font-size: 13px;
    list-style: inside;
  }
`;

const EditQuestion = () => {
  const editorRef = useRef<Editor>(null);
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const [hashTagInput, setHasgTagInput] = useState('');
  const [data, setData] = useState<{
    title: string;
    body: string | undefined;
    tags: Array<string>;
  }>({
    title: 'Stop an array while finding string',
    body: question,
    tags: ['javascript', 'react'],
  });

  const handleEditorChange = useCallback(() => {
    if (editorRef.current) {
      setData((prev) => {
        return {
          ...prev,
          body: editorRef.current?.getInstance().getMarkdown(),
        };
      });
    }
  }, []);

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return { ...prev, title: e.target.value };
    });
  }, []);

  const handleInputOnKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (e.key === 'Enter' && target.value.trim() !== '') {
        setData((prev) => {
          return { ...prev, tags: [...prev.tags, target.value] };
        });
        setHasgTagInput('');
      }
    },
    []
  );

  // const handleEditButtonClick = useCallback(() => {
  //   dispatch(editQuestion(data));
  //   navigate(-1);
  // }, [data, dispatch, navigate]);

  return (
    <Container>
      <EditHeader />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={data.title}
        onChange={handleTitleChange}
      />
      <EditorContainer>
        <h2>Body</h2>
        <Editor
          initialValue={data.body}
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
          ref={editorRef}
          onChange={handleEditorChange}
        />
      </EditorContainer>
      <label htmlFor="tags">Tags</label>
      <HashTagContainer>
        <HashTags>
          {data.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </HashTags>
        <input
          type="text"
          id="tags"
          value={hashTagInput}
          onChange={(e) => setHasgTagInput(e.target.value)}
          onKeyUp={handleInputOnKeyUp}
        />
      </HashTagContainer>
      <BlueButton width="90px">Save Edits</BlueButton>
      <CancelButton>Cancel</CancelButton>
      <Sidebar>
        <aside>
          <header>How to Edit</header>
          <ul>
            <li>Correct minor typos or mistakes</li>
            <li>Clarify meaning without changing it</li>
            <li>Add related resources or links</li>
            <li>Always respect the author’s intent</li>
            <li>Don’t use edits to reply to the author</li>
          </ul>
        </aside>
      </Sidebar>
    </Container>
  );
};

export default EditQuestion;
