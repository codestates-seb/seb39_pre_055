import { GrFormClose } from 'react-icons/gr';
import styled from 'styled-components';

import { BlueButton, PowderButton } from '..';
import { useModal } from '../Modal';

export const SArticle = styled.article`
  padding: 25px;
`;

export const SContentBox = styled.div`
  color: var(--black-700);
  font-size: 0.95rem;
  line-height: 1.2rem;
  margin-bottom: 25px;
`;

export const H2 = styled.h2`
  font: revert;
  font-size: 23px;
  margin-bottom: 25px;
`;

export const S1P = styled.p`
  margin-bottom: 25px;

  & > a > span {
    color: #0074cc;
  }
`;

export const S2P = styled.p`
  color: var(--black-500);
  font-size: 0.8rem;
`;

export const CloseSVG = styled(GrFormClose)`
  position: absolute;
  right: 4%;
  top: 3%;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const SButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`;

interface Prop {
  type: 'upvote' | 'downvote';
}

const VoteModal = ({ type }: Prop) => {
  const { closeModal } = useModal();

  return (
    <SArticle>
      <CloseSVG viewBox="0 0 20 20" onClick={closeModal} />
      <H2>Join the Stack Overflow community</H2>
      <SContentBox>
        {type === 'upvote' && (
          <S1P>
            You need{' '}
            <a
              href="https://stackoverflow.com/help/privileges/vote-up"
              target="_blank"
              rel="noreferrer"
            >
              <span>15 reputation</span>
            </a>{' '}
            to upvote posts.
          </S1P>
        )}
        {type === 'downvote' && (
          <S1P>
            You need{' '}
            <a
              href="https://stackoverflow.com/help/privileges/vote-down"
              target="_blank"
              rel="noreferrer"
            >
              <span>125 reputation</span>
            </a>{' '}
            to downvote posts.
          </S1P>
        )}
        <S1P>
          Join Stack Overflow to start earning reputation and unlocking new
          privileges like voting and commenting.
        </S1P>
      </SContentBox>
      <SButtonBox>
        <PowderButton width="100%" height="38px" onClick={closeModal}>
          Log in
        </PowderButton>
        <BlueButton width="100%" height="38px" onClick={closeModal}>
          Sign up
        </BlueButton>
      </SButtonBox>
    </SArticle>
  );
};

export default VoteModal;
