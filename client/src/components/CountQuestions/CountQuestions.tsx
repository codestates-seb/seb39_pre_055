import styled from 'styled-components';

interface Prop {
  counts: string;
}

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  border: none;
  margin-top: 5px;
  font-size: 14px;
  }
`;

const CountQuestions = ({ counts }: Prop) => {
  const setCounts = 22936387; // 질문의 총 개수 값이 들어오게 수정해야함
  const result = setCounts.toLocaleString('ko-KR');
  counts = result;
  return (
    <Wrapper>
      <span>{counts}</span>
      <span>questions</span>
    </Wrapper>
  );
};

export default CountQuestions;
