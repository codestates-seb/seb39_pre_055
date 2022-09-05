import { css } from 'styled-components';

import GuidelineCard from '../../../../../components/Accordian/Accordion';
import {
  SContentBox,
  SContentP,
} from '../../../../../components/Accordian/style';
import { SBox } from '../style';
import { DefaultList, SLink, SStepOList, SUList } from './style';

const boxStyles = css`
  box-shadow: none;
`;

const titleBoxStyles = css`
  background-color: white;
  font-size: 0.8rem;
`;

const titleStyles = css`
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--black-900);
`;

const extraStyles = {
  cardBox: boxStyles,
  titleBox: titleBoxStyles,
  title: titleStyles,
};

const Step1Card = () => {
  return (
    <SContentBox>
      <SBox>
        <SContentP>
          The community is here to help you with specific coding, algorithm, or
          language problems.
          <br />
          <br />
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
          <SUList>
            <DefaultList>Include details about your goal</DefaultList>
            <DefaultList>Describe expected and actual</DefaultList>
            <DefaultList>results Include any error messages</DefaultList>
          </SUList>
        </GuidelineCard>
        <GuidelineCard
          title="Describe what you’ve tried"
          polymorphic="li"
          extraStyles={extraStyles}
          isCollapsable
        >
          <SContentP>
            Show what you’ve tried and tell us what you found (on this site or
            elsewhere) and why it didn’t meet your needs. You can get better
            answers when you provide research.
          </SContentP>
        </GuidelineCard>
        <GuidelineCard
          title="Show some code"
          polymorphic="li"
          extraStyles={extraStyles}
          isCollapsable
        >
          <SContentP>
            When appropriate, share the minimum amount of code others need to
            reproduce your problem (also called a{' '}
            <SLink href="https://stackoverflow.com/help/minimal-reproducible-example">
              minimum, reproducible example
            </SLink>
            )
          </SContentP>
        </GuidelineCard>
      </SStepOList>
    </SContentBox>
  );
};

export default Step1Card;
