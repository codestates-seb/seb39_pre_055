import styled from 'styled-components';

interface Prop {
  counts: number;
}

const Wrapper = styled.p`
  display: flex;
  justify-content: center;
  border: none;
  margin-top: 5px;
  font-size: 17px;
  span {
    margin-right: 5px;
  }
  @media (max-width: 640px) {
    padding-bottom: 13px;
    margin-top: 0px;
    justify-content: flex-start;
  }
`;

const CountQuestions = ({ counts }: Prop) => {
  return (
    <Wrapper>
      <span>{counts.toLocaleString('ko-KR')}</span>
      <span>questions</span>
    </Wrapper>
  );
};

export default CountQuestions;
