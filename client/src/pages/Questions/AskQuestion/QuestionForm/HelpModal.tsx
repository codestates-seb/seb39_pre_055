import { GrFormClose } from 'react-icons/gr';
import styled from 'styled-components';

import { BlueButton } from '../../../../components';
import { useModal } from '../../../../components/Modal';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';

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
  margin-bottom: 15px;
`;

export const S1P = styled.p`
  margin-bottom: 20px;
`;

export const S2P = styled.p`
  color: var(--black-500);
  font-size: 0.8rem;
`;

export const SLink = styled.a`
  &:link,
  &:visited {
    color: var(--blue-500);
  }
`;

export const SOList = styled.ol`
  display: flex;
  flex-flow: column wrap;
  row-gap: 15px;
  padding-left: 20px;
  margin: 25px 0px;
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
  flex-flow: row nowrap;
  column-gap: 17px;
  padding: 5px 10px;
`;

export const SDONTButton = styled(BlueButton)`
  background-color: rgb(0, 0, 0, 0);
  color: var(--blue-600);

  &:hover,
  &:focus {
    background-color: var(--blue-050);
  }
`;

const HelpModal = () => {
  const { closeModal } = useModal();
  const [, setHideMsg] = useLocalStorage(`${'userId'}_DONTSHOWHINT`, false);

  const dontShowHints = () => {
    closeModal();
    setHideMsg(true);
  };

  return (
    <SArticle>
      <CloseSVG viewBox="0 0 20 20" onClick={closeModal} />
      <H2>Asking a good question</H2>
      <SContentBox>
        <S1P>
          You’re ready to ask your first programming-related question and the
          community is here to help! To get you the best answers, we’ve provided
          some guidance:
        </S1P>
        <S1P>
          Before you post,{' '}
          <SLink
            href="https://stackoverflow.com/search"
            target="_blank"
            rel="noopener"
          >
            search the site
          </SLink>{' '}
          to make sure your question hasn’t been answered.
        </S1P>
        <SOList>
          <li>Summarize the problem</li>
          <li>Describe what you’ve tried</li>
          <li>When appropriate, show some code</li>
        </SOList>
        <S2P>You’ll find more tips in the sidebar.</S2P>
      </SContentBox>
      <SButtonBox>
        <BlueButton height="38px" onClick={closeModal}>
          Start Writing
        </BlueButton>
        <SDONTButton height="38px" onClick={dontShowHints}>
          Don’t show me this again
        </SDONTButton>
      </SButtonBox>
    </SArticle>
  );
};

export default HelpModal;
