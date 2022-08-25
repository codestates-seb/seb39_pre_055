import styled from 'styled-components';

interface Prop {
  votes: number;
  answers: number;
  views: number;
}

// const Wrapper = styled.div`
//   font-size: 10px;
//   color: var(--black-500);
// `;

const Wrapper2 = styled.div`
  font-size: 10px;
  color: var(--black-500);
`;

const Wrapper3 = styled.div`
  font-size: 10px;
  color: var(--black-500);
`;

const Container = styled.span`
  display: flex;
  flex-direction: colunm;
`;

const LeftCounts = ({ votes, answers, views }: Prop) => {
  return (
    <Container>
      {/* <Wrapper votes={votes} /> */}
      <Wrapper2>{answers} answers</Wrapper2>
      <Wrapper3>{views} views</Wrapper3>
    </Container>
  );
};

export default LeftCounts;
