/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useConfirm, useToggle } from '../../hooks';
import {
  changeEditBody,
  changeVote,
  decreaseVote,
  deleteQuestion,
  increaseVote,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
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
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user: loginUser } = useAppSelector((state) => state.user);
  const confirmDelete = useConfirm(
    'Delete this page?',
    () => dispatch(deleteQuestion(answerId as number)),
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

  const toggleShareModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShareModal((prev) => !prev);
  };

  const handleEditBtnClick = () => {
    if (params.id) {
      dispatch(
        changeEditBody({
          type,
          body,
          answerId,
        })
      );
      navigate(`/${params.id}/edit`);
    }
  };

  const currentVote = useMemo(() => vote, []);

  const upVote = () => {
    if (vote > currentVote) return;
    dispatch(increaseVote());
    dispatch(changeVote(params.id as string));
  };

  const downVote = () => {
    if (vote < currentVote) return;
    dispatch(decreaseVote());
    dispatch(changeVote(params.id as string));
  };

  return (
    <MainContents onClick={closeShareModal}>
      <Votes>
        <Triangle onClick={upVote} />
        <span>{vote}</span>
        <Triangle rotate="180deg" onClick={downVote} />
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
            {user.userId === loginUser?.userId && (
              <>
                <TextButton name="Edit" onClick={handleEditBtnClick} />
                <TextButton name="Delete" onClick={confirmDelete} />
              </>
            )}
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
