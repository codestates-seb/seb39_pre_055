import styled from 'styled-components';

interface Prop {
  title: string;
}

const Wrapper = styled.span`
  margin-bottom: 5px;
  font-size: 17px;
  color: var(--blue-600);
  @media (max-width: 640px) {
    font-size: 14.38px;
  }
`;

const QuestionTitle = ({ title }: Prop) => {
  return (
    <Wrapper>
      <a href="http://localhost:3000/:id">{title}</a>
    </Wrapper>
  );
};

export default QuestionTitle;
