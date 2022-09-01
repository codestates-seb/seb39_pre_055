import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Prop {
  title: string;
  questionId: number;
}

const SLink = styled(Link)`
  margin-bottom: 5px;
  font-size: 17px;
  color: var(--blue-600);

  &:link,
  &:visited {
    color: var(--blue-600);
  }

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
const QuestionTitle = ({ title, questionId }: Prop) => {
  return <SLink to={`/${questionId}`}>{title}</SLink>;
};

export default QuestionTitle;
