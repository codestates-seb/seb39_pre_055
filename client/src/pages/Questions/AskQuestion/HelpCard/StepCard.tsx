import { ReactNode } from 'react';

import {
  SCardBox,
  SContentBox,
  SContentP,
  STitleBox,
  STitleButton,
} from './style';

interface HelpCardProps {
  title: string;
  isCollapsable: boolean;
  children?: ReactNode;
}

const Children = () => {
  return (
    <SContentBox>
      <SContentP>
        The community is here to help you with specific coding, algorithm, or
        language problems.
      </SContentP>
      <SContentP>Avoid asking opinion-based questions.</SContentP>
    </SContentBox>
  );
};

const StepCard = ({ title, isCollapsable, children }: HelpCardProps) => {
  return (
    <SCardBox>
      <STitleBox>
        <STitleButton>{title}</STitleButton>
      </STitleBox>
      {children}
    </SCardBox>
  );
};

export default StepCard;

/* <STitleH3>Step 1: Draft your question</STitleH3> */
