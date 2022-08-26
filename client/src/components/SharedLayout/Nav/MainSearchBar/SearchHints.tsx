import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PowderButton } from '../../../Button/Templates';

const HintsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5px;
  column-gap: 5px;
  width: 100%;
  height: 70%;
  padding: 10px;
`;

const HintBox = styled.div`
  height: 20px;
`;

const FontSmall = styled.span`
  font-size: 0.85rem;
`;

const HintSpan = styled(FontSmall)`
  margin-right: 5px;
`;

const ExplanationSpan = styled(FontSmall)`
  color: var(--black-400);
`;

const allHints = [
  { hint: '[tag]', explanation: 'search within a tag' },
  { hint: 'answers:0', explanation: 'unanswered questions' },
  { hint: 'user:1234', explanation: 'search by author' },
  { hint: 'score:3', explanation: 'posts with a 3+ score' },
  { hint: '"words here"', explanation: 'exact phrase' },
  { hint: 'is:question', explanation: 'type of post' },
  { hint: 'collective:"Name"', explanation: 'collective content' },
  { hint: 'isaccepted:yes', explanation: 'search within status' },
];

interface HintProps {
  hint: string;
  explanation: string;
}

const MiscBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid var(--black-100);
`;

const AskLink = styled(Link)`
  &:link,
  &:visited {
    color: inherit;
  }
`;

const SearchHelpBox = styled.div`
  width: 80px;
  margin-left: auto;
`;

const SearchHelpLink = styled(Link)`
  font-size: 0.8rem;

  &:link,
  &:visited {
    color: var(--powder-400);
  }
`;

const SearchMisc = () => {
  return (
    <MiscBox>
      <PowderButton>
        <AskLink to="/questions">Ask a question</AskLink>
      </PowderButton>
      <SearchHelpBox>
        <SearchHelpLink to="/questions">Search help</SearchHelpLink>
      </SearchHelpBox>
    </MiscBox>
  );
};

const Hint = ({ hint, explanation }: HintProps) => {
  return (
    <div>
      <HintSpan>{hint}</HintSpan>
      <ExplanationSpan>{explanation}</ExplanationSpan>
    </div>
  );
};

const SearchHints = () => {
  return (
    <>
      <HintsBox>
        {allHints.map((e) => (
          <Hint hint={e.hint} explanation={e.explanation} key={e.hint} />
        ))}
      </HintsBox>
      <SearchMisc />
    </>
  );
};

export default SearchHints;
