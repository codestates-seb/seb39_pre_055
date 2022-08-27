/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useConfirm from '../../hooks/useConfirm';
import { useVoted } from '../../hooks/useVoted';
import { AnchorCard, Tag, TextButton, Triangle, UserInfoCard } from '../index';
import { MainContents, Tags, TextArea, Utils, Votes } from './style';

const url = 'https://graph.facebook.com/1616279655126812/picture?type=large';
interface Prop {
  type: 'question' | 'answer';
  body: string;
  tags?: Array<string>;
}

const Content = ({ type, body, tags }: Prop) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [vote, increaseVote, decreaseVote] = useVoted(0);
  const navigate = useNavigate();
  const confirmDelete = useConfirm(
    'Delete this page?',
    () => console.log('Deleting the world...'),
    () => console.log('Aborted')
  );

  const [toggle, setToggle] = useState(false);

  return (
    <MainContents>
      <Votes>
        <Triangle onClick={increaseVote as () => void} />
        <span>{vote as number}</span>
        <Triangle rotate="180deg" onClick={decreaseVote as () => void} />
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
            <TextButton
              name="Share"
              onClick={() => setToggle((prev) => !prev)}
            />
            <TextButton name="Edit" onClick={() => navigate('/questions/1')} />
            {/* 작성한 유저일 경우에만 Delete 버튼 render 되도록 수정 */}
            <TextButton name="Delete" onClick={confirmDelete} />
            <TextButton
              name={isFollowing ? 'Follow' : 'Following'}
              onClick={() => setIsFollowing((prev) => !prev)}
            />
          </div>
          {toggle && <AnchorCard />}
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
