import styled, { css } from 'styled-components';

import GuidelineCard from './HelpCard/GuidelineCard';
import { SContentBox, SContentP } from './HelpCard/style';

const mt15 = css`
  margin-top: 15px;
`;
const boxStyles = css`
  box-shadow: none;
`;
const titleBoxStyles = css`
  background-color: white;
  font-size: 0.8rem;
`;

export const SStepOList = styled.ol`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

const extraStyles = {
  cardBox: boxStyles,
  titleBox: titleBoxStyles,
};

export const SBox = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
`;

const Step1Contents = () => {
  return (
    <SContentBox>
      <SBox>
        <SContentP>
          The community is here to help you with specific coding, algorithm, or
          language problems.
        </SContentP>
        <SContentP extraStyles={mt15}>
          Avoid asking opinion-based questions.
        </SContentP>
      </SBox>
      <SStepOList>
        <GuidelineCard
          title="Summarize the problem"
          polymorphic="li"
          extraStyles={extraStyles}
          isCollapsable
        >
          <ul>
            <li>Include details about your goal</li>
            <li>Describe expected and actual</li>
            <li>results Include any error messages</li>
          </ul>
        </GuidelineCard>
        <GuidelineCard
          title="Describe what you’ve tried"
          polymorphic="li"
          extraStyles={extraStyles}
          isCollapsable
        >
          <p>
            Show what you’ve tried and tell us what you found (on this site or
            elsewhere) and why it didn’t meet your needs. You can get better
            answers when you provide research.
          </p>
        </GuidelineCard>
        <GuidelineCard
          title="Show some code"
          polymorphic="li"
          extraStyles={extraStyles}
          isCollapsable
        >
          <p>
            When appropriate, share the minimum amount of code others need to
            reproduce your problem (also called a minimum, reproducible example)
          </p>
        </GuidelineCard>
      </SStepOList>
    </SContentBox>
  );
};

export default Step1Contents;
