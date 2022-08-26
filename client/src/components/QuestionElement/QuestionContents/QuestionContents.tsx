import styled from 'styled-components';

interface Prop {
  contents: string;
}

const Container = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-top: 5px;
  padding-right: 23px;
`;

const QuestionContents = ({ contents }: Prop) => {
  return <Container>{contents}</Container>;
};

export default QuestionContents;
