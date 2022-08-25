import styled from 'styled-components';

interface Prop {
  counts: number;
}

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  border: none;
  margin-top: 5px;
  font-size: 14px;
`;

const CountQuestions = ({ counts }: Prop) => {
  return <Wrapper>{counts} questions</Wrapper>;
};

export default CountQuestions;
