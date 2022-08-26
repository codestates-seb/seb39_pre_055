import styled from 'styled-components';

interface Prop {
  votes: number;
  answers: number;
  views: number;
}

const Wrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  color: var(--fc-dark);
  margin-top: 17px;
  width: 40px;
`;

const Wrapper2 = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  color: var(--black-500);
  margin-top: 7px;
  width: 70px;
`;

const Wrapper3 = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  color: var(--black-500);
  margin-top: 7px;
`;

const Container = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 150px;
`;

// const TextContainer = styled.span`
//   flex-direction: column;
//   align-items: flex-start;
// `;

const LeftCounts = ({ votes, answers, views }: Prop) => {
  return (
    <Container>
      {/* <TextContainer> */}
      <Wrapper>{votes} votes</Wrapper>
      <Wrapper2>{answers} answers</Wrapper2>
      <Wrapper3>{views} views</Wrapper3>
      {/* </TextContainer> */}
    </Container>
  );
};

export default LeftCounts;
