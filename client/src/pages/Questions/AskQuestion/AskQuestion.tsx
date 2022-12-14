import { useEffect, useState } from 'react';

import GuidelineCard from '../../../components/Accordian/Accordion';
import { useModal } from '../../../components/Modal';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useAppSelector } from '../../../redux';
import MoreHelpfulCard from './QuestionForm/Cards/MoreHelpfulCard';
import NonProgCard from './QuestionForm/Cards/NonProgCard';
import Step1Card from './QuestionForm/Cards/Step1Card';
import Step2Card from './QuestionForm/Cards/Step2Card';
import HelpModal from './QuestionForm/HelpModal';
import QuestionForm from './QuestionForm/QuestionForm';
import {
  SBox,
  SCardAside,
  SQuestionBox,
  SRobotSVG,
  STitleH1,
  STitleHeader,
} from './style';

const helpCards = [
  {
    title: 'Step 1: Draft your question',
    children: <Step1Card />,
    isCollapsable: false,
  },
  {
    title: 'Have a non-programming question?',
    children: <NonProgCard />,
    isCollapsable: true,
  },
  {
    title: 'More helpful links',
    children: <MoreHelpfulCard />,
    isCollapsable: true,
  },
];

const AskQuestion = () => {
  const [errs, setErrs] = useState({ status: 'unknown', count: 0 });
  const { openModal, closeModal } = useModal();
  const { displayName } = useAppSelector((state) => state.user.user) || {};
  const [hideMsg] = useLocalStorage(`${displayName}_DONTSHOWHINT`, false);
  const step2Card = [
    {
      title: 'Step 2: Review your question',
      children: <Step2Card errCount={errs.count} />,
      isCollapsable: false,
    },
  ];

  useEffect(() => {
    if (!hideMsg && displayName) {
      openModal(<HelpModal />);
    }

    return () => closeModal();
  }, [hideMsg, displayName, openModal, closeModal]);

  return (
    <SQuestionBox>
      <STitleHeader>
        <STitleH1>Ask a public question</STitleH1>
        <SRobotSVG viewBox="0 0 580 126" />
      </STitleHeader>
      <SBox>
        <QuestionForm errCount={errs.count} setErrs={setErrs} />
        <SCardAside>
          {(errs.status === 'ongoing' ? step2Card : helpCards).map((e) => (
            <GuidelineCard
              title={e.title}
              isCollapsable={e.isCollapsable}
              key={e.title}
            >
              {e.children}
            </GuidelineCard>
          ))}
        </SCardAside>
      </SBox>
    </SQuestionBox>
  );
};

export default AskQuestion;
