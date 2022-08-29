import styled from 'styled-components';

import GuidelineCard from './HelpCard/GuidelineCard';
import QuestionForm from './QuestionForm/QuestionForm';
import Step1Contents from './Step1Contents';
import {
  SBox,
  SCardBox,
  SQuestionBox,
  SRobotSVG,
  STitleBox,
  STitleH1,
} from './style';

const helpCards = [
  {
    title: 'Step 1: Draft your question',
    children: <Step1Contents />,
  },
  {
    title: 'Have a non-programming question?',
  },
];

const AskQuestion = () => {
  return (
    <SQuestionBox>
      <STitleBox>
        <STitleH1>Ask a public question</STitleH1>
        <SRobotSVG viewBox="0 0 580 126" />
      </STitleBox>

      <SBox>
        <QuestionForm />
        <SCardBox>
          <GuidelineCard
            title="Step 1: Draft your question"
            isCollapsable={false}
          >
            <Step1Contents />
          </GuidelineCard>
          <GuidelineCard title="Have a non-programming question?" isCollapsable>
            <Step1Contents />
          </GuidelineCard>
          <GuidelineCard title="More helpful links" isCollapsable>
            <Step1Contents />
          </GuidelineCard>
        </SCardBox>
      </SBox>
    </SQuestionBox>
  );
};

export default AskQuestion;
