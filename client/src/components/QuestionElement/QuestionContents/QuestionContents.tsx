import styled from 'styled-components';

interface Prop {
  contents: string;
}

const Wrapper = styled.span`
  margin: 2px;
  padding: 4.8px 6px;
  border: none;
  color: #39739d;
  border: 1px solid var(--black-500);
`;

const QuestionContents = ({ contents }: Prop) => {
  return <Wrapper>{contents}</Wrapper>;
};

export default QuestionContents;
