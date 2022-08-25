import styled from 'styled-components';

import QuestionTitle from './QuestionTitle/QuestionTitle';

interface Prop {
  contents: string;
  title: string;
}
// display: flex;
// flex-direction: column;
const LeftCounts = styled.span`
  margin-left: 10px;
  padding: 4.8px 6px;
  border: 1px solid var(--black-500);
`;

const QuestionContents = styled.span`
  margin: 2px;
  padding: 4.8px 6px;
  border: 1px solid var(--black-500);
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: colunm;
  margin: 2px;
  padding: 4.8px 6px;
  border: 1px solid var(--black-500);
`;

// const ContentContainer = styled.span`
//   display: flex;
//   justify-content: row;
// `;

const QuestionElement = ({ title, contents }: Prop) => {
  return (
    <MainContainer>
      <LeftCounts />
      {/* <ContentContainer> */}
      <QuestionTitle title={title} />
      <QuestionContents>{contents}</QuestionContents>
      {/* </ContentContainer> */}
    </MainContainer>
  );
};

export default QuestionElement;
