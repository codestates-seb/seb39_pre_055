import styled from 'styled-components';

interface Prop {
  contents: string;
}

const Container = styled.div`
  font-size: 14px;
  color: var(--black-700);
  margin-bottom: 8px;
  padding-right: 23px;
  line-height: 1.3rem;
  max-height: 43px;
  width: calc(100%);
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const limitLength = 182;

const QuestionContents = ({ contents }: Prop) => {
  const txt = contents;

  /* if (contents.length > limitLength) {
    txt = `${contents.slice(0, limitLength)} ...`;
  } */

  return <Container>{txt}</Container>;
};

export default QuestionContents;
