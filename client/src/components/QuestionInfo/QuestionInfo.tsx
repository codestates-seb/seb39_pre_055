import styled from 'styled-components';

import { getDateToString } from '../../utils';

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
  value: string | number;
  isViewd?: boolean;
}

const QuestionInfo = ({ option, value, isViewd }: Prop) => {
  return (
    <Wrapper>
      <span>{option} </span>
      <strong>{isViewd ? value : getDateToString(value as string)}</strong>
    </Wrapper>
  );
};

export default QuestionInfo;
