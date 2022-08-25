import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useState } from 'react';
import styled from 'styled-components';

import { Tag, Triangle, UserInfoCard } from '../index';

const MainContents = styled.main`
  display: flex;
  margin-top: 16px;
  border-bottom: 1px solid rgb(227, 230, 232);
`;

const Votes = styled.aside`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-right: 16px;

  span {
    margin: 20px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: var(--black-500);
  }
`;

const TextArea = styled.section`
  flex-grow: 1;
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
`;

const Tags = styled.section`
  margin: 24px 0;
`;

const Utils = styled.section`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin: 16px 0;

  button {
    border: none;
    background-color: inherit;
    color: rgb(106, 115, 124);
    font-size: 13px;
  }
`;

const url = 'https://graph.facebook.com/1616279655126812/picture?type=large';
interface Prop {
  type: 'question' | 'answer';
  body: string;
}

const Content = ({ type, body }: Prop) => {
  const [vote, setVote] = useState(0);

  return (
    <MainContents>
      <Votes>
        <Triangle onClick={() => setVote((prev) => prev + 1)} />
        <span>{vote}</span>
        <Triangle rotate="180deg" onClick={() => setVote((prev) => prev - 1)} />
      </Votes>
      <TextArea>
        <Viewer
          initialValue={body}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
        {type === 'question' && (
          <Tags>
            {['javascript', 'arrays', 'string'].map((name) => (
              <Tag key={name} name={name} />
            ))}
          </Tags>
        )}
        <Utils>
          <div>
            <button type="button">Share</button>
            <button type="button">Edit</button>
            <button type="button">Follow</button>
          </div>
          <UserInfoCard
            date="asked 2 mins ago"
            img={url}
            name="Damian Kowalski"
            type={type}
          />
        </Utils>
      </TextArea>
    </MainContents>
  );
};

export default Content;
