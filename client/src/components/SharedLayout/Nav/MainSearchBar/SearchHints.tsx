import { PowderButton } from '../../../Button/Templates';
import {
  AskLink,
  ExplanationSpan,
  HintsBox,
  HintSpan,
  MiscBox,
  SearchHelpBox,
  SearchHelpLink,
} from './style';

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
