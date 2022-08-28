import { Container, Wrapper, Wrapper2, Wrapper3 } from './style';

interface Prop {
  votes: number;
  answers: number;
  views: number;
}

const LeftCounts = ({ votes, answers, views }: Prop) => {
  return (
    <Container>
      <Wrapper>{votes} votes</Wrapper>
      <Wrapper2>{answers} answers</Wrapper2>
      <Wrapper3>{views} views</Wrapper3>
    </Container>
  );
};

export default LeftCounts;
