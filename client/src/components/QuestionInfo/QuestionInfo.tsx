import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8px;
  margin-right: 16px;
  font-size: 13px;

  span {
    margin-right: 2px;
    color: var(--black-500);
  }

  strong {
    color: var(--black-800);
  }
`;

interface Prop {
  option: string;
  value: string;
}

const QuestionInfo = ({ option, value }: Prop) => {
  return (
    <Wrapper>
      <span>{option} </span>
      <strong>{value}</strong>
    </Wrapper>
  );
};

export default QuestionInfo;
