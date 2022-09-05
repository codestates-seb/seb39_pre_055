/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useConfirm, useToggle } from '../../hooks';
import {
  changeAnswerVote,
  changeEditBody,
  changeQuestionVote,
  decreaseAnswerVote,
  decreaseQuestionVote,
  deleteAnswer,
  deleteQuestion,
  increaseAnswerVote,
  increaseQuestionVote,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { User } from '../../types';
import { AnchorCard, Tag, TextButton, Triangle, UserInfoCard } from '../index';
import { useModal } from '../Modal';
import { MainContents, Tags, TextArea, Utils, Votes } from './style';
import VoteModal from './VoteModal';

type PostType = 'question' | 'answer';

interface Prop {
  type: PostType;
  body: string;
  tags?: Array<string>;
  user: User;
  vote: number;
  createdAt: string;
  answerId?: number;
}

const Content = (props: Prop) => {
  const { type, body, tags, user, createdAt, vote, answerId } = props;
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user: loginUser } = useAppSelector((state) => state.user);
  const currentVote = useMemo(() => vote, []);
  const [shareModal, setShareModal] = useState(false);
  const [following, toggleFollowing] = useToggle();
  const { openModal, closeModal } = useModal({
    position: { x: '50%', y: '50%' },
    height: '400px',
    width: '400px', // 수정 예정
  });

  useEffect(() => {
    return () => closeModal();
  }, []);

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

  const handleDelete = (type: PostType) => {
    if (type === 'question') {
      dispatch(deleteQuestion(params.id as string));
      navigate('/');
    }
    if (type === 'answer') {
      dispatch(deleteAnswer(answerId as number));
    }
  };

  const handleEdit = () => {
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

  const confirmDelete = useConfirm(
    'Delete this page?',
    () => handleDelete(type),
    () => console.log('Cancel')
  );

  const upVote = useCallback(() => {
    if (!loginUser) {
      openModal(<VoteModal type="upvote" />);
      return;
    }
    if (vote > currentVote) return;
    if (type === 'question') {
      dispatch(increaseQuestionVote());
      dispatch(changeQuestionVote(params.id as string));
    }
    if (type === 'answer') {
      dispatch(increaseAnswerVote(answerId as number));
      dispatch(changeAnswerVote(answerId as number));
    }
  }, [vote]);

  const downVote = useCallback(() => {
    if (!loginUser) {
      openModal(<VoteModal type="downvote" />);
      return;
    }
    if (vote < currentVote) return;
    if (type === 'question') {
      dispatch(decreaseQuestionVote());
      dispatch(changeQuestionVote(params.id as string));
    }
    if (type === 'answer') {
      dispatch(decreaseAnswerVote(answerId as number));
      dispatch(changeAnswerVote(answerId as number));
    }
  }, [vote]);

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
            {/** email 수정 예정 */}
            {user.email === loginUser?.email && (
              <>
                <TextButton name="Edit" onClick={handleEdit} />
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
