import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return <Wrapper onClick={() => navigate('/questions')}>{title}</Wrapper>;
};

export default QuestionTitle;
