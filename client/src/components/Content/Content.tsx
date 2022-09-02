/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useConfirm, useToggle, useVoted } from '../../hooks';
import { changeClickedId, changeEditType, useAppDispatch } from '../../redux';
import { AnchorCard, Tag, TextButton, Triangle, UserInfoCard } from '../index';
import { MainContents, Tags, TextArea, Utils, Votes } from './style';

interface Prop {
  type: 'question' | 'answer';
  body: string;
  tags?: Array<string>;
  user: {
    userId: number;
    displayName: string;
    email: string;
    password: string;
    image: string;
    userStatus: string;
  };
  createdAt: string;
  vote: number;
  answerId?: number;
}

const Content = ({
  type,
  body,
  tags,
  user,
  createdAt,
  vote,
  answerId,
}: Prop) => {
  const [following, toggleFollowing] = useToggle();
  const [shareModal, setShareModal] = useState(false);
  const [currentVote, increaseVote, decreaseVote] = useVoted(vote);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const confirmDelete = useConfirm(
    'Delete this page?',
    () => console.log('Deleting the world...'),
    () => console.log('Aborted')
  );

  const closeShareModal = useCallback((e: React.MouseEvent) => {
    const { tagName, parentElement } = e.target as HTMLElement;
    if (
      parentElement?.id !== 'share-modal' &&
      parentElement?.id !== 'link-container' &&
      tagName !== 'svg' &&
      tagName !== 'path'
    ) {
      setShareModal(false);
    }
  }, []);

  const toggleShareModal = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShareModal((prev) => !prev);
  }, []);

  const handleEditBtnClick = () => {
    dispatch(changeEditType(type));
    if (params.id) {
      dispatch(changeClickedId(answerId as number));
      navigate(`/${params.id}/edit`);
    }
  };

  return (
    <MainContents onClick={closeShareModal}>
      <Votes>
        <Triangle onClick={increaseVote} />
        <span>{currentVote}</span>
        <Triangle rotate="180deg" onClick={decreaseVote} />
      </Votes>
      <TextArea>
        <Viewer
          initialValue={body}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
        {type === 'question' && (
          <Tags>{tags && tags.map((tag) => <Tag key={tag} name={tag} />)}</Tags>
        )}
        <Utils>
          <div>
            <TextButton name="Share" onClick={toggleShareModal} />
            <TextButton name="Edit" onClick={handleEditBtnClick} />
            {/* 작성한 유저일 경우에만 Delete 버튼 render 되도록 수정 */}
            <TextButton name="Delete" onClick={confirmDelete} />
            <TextButton
              name={following ? 'Follow' : 'Following'}
              onClick={toggleFollowing}
            />
          </div>
          {shareModal && <AnchorCard type={type} />}
          <UserInfoCard
            date={createdAt}
            img={user.image}
            name={user.displayName}
            type={type}
          />
        </Utils>
      </TextArea>
    </MainContents>
  );
};

export default Content;
