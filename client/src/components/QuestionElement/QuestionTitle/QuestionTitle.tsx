import styled from 'styled-components';

interface Prop {
  title: string;
}

const Wrapper = styled.span`
  margin-top: 15px;
  font-size: 14px;

  a {
    color: var(--blue-600);
  }
`;

const QuestionTitle = ({ title }: Prop) => {
  return (
    <Wrapper>
      <a href="http://localhost:3000/questions/users">{title}</a>
    </Wrapper>
  );
};

export default QuestionTitle;
