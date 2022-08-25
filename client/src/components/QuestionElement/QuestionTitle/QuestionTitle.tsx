import styled from 'styled-components';

interface Prop {
  title: string;
}

const Wrapper = styled.span`
  margin: 2px;
  padding: 4.8px 6px;
  border: none;
  color: #39739d;
  background-color: #e1ecf4;
  border-radius: 3px;
`;

const QuestionTitle = ({ title }: Prop) => {
  return (
    <Wrapper>
      <a href="http://localhost:3000/questions/users">{title}</a>
    </Wrapper>
  );
};

export default QuestionTitle;
