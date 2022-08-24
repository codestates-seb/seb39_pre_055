import { useParams } from 'react-router-dom';

const QuestionDetail = () => {
  const params = useParams();
  console.log(params);
  return <div>123</div>;
};

export default QuestionDetail;
