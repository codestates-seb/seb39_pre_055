/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tag, TextButton, Triangle, UserInfoCard } from '../index';
import { MainContents, Tags, TextArea, Utils, Votes } from './style';

const url = 'https://graph.facebook.com/1616279655126812/picture?type=large';
interface Prop {
  type: 'question' | 'answer';
  body: string;
  tags?: Array<string>;
}

const Content = ({ type, body, tags }: Prop) => {
  const [vote, setVote] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const navigate = useNavigate();

  const defaultVote = useMemo(() => vote, []);

  const increaseVote = useCallback(() => {
    if (vote > defaultVote) return;
    setVote((prev) => prev + 1);
  }, [vote, defaultVote]);

  const decreaseVote = useCallback(() => {
    if (vote < defaultVote) return;
    setVote((prev) => prev - 1);
  }, [vote, defaultVote]);

  const handleDelete = () => {
    if (window.confirm('Delete this page?')) {
      console.log('삭제');
    } else {
      console.log('취소');
    }
  };

  return (
    <MainContents>
      <Votes>
        <Triangle onClick={increaseVote} />
        <span>{vote}</span>
        <Triangle rotate="180deg" onClick={decreaseVote} />
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
            <TextButton name="Share" />
            <TextButton name="Edit" onClick={() => navigate('/questions/1')} />
            <TextButton name="Delete" onClick={handleDelete} />
            <TextButton
              name={isFollowing ? 'Follow' : 'Following'}
              onClick={() => setIsFollowing((prev) => !prev)}
            />
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
