import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tag, Triangle, UserInfoCard } from '../index';
import { MainContents, Tags, TextArea, Utils, Votes } from './style';

const url = 'https://graph.facebook.com/1616279655126812/picture?type=large';
interface Prop {
  type: 'question' | 'answer';
  body: string;
  tags?: Array<string>;
}

const Content = ({ type, body, tags }: Prop) => {
  const [vote, setVote] = useState(0);
  const navigate = useNavigate();

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
            {tags && tags.map((name) => <Tag key={name} name={name} />)}
          </Tags>
        )}
        <Utils>
          <div>
            <button type="button">Share</button>
            <button type="button" onClick={() => navigate('/questions/1')}>
              Edit
            </button>
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
