/* eslint-disable react/display-name */
import { memo } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../redux';

const Wrapper = styled.p`
  display: flex;
  justify-content: center;
  border: none;
  margin-top: 5px;
  font-size: 17px;
  span {
    margin-right: 5px;
  }
  @media (max-width: 640px) {
    padding-bottom: 13px;
    margin-top: 0px;
    justify-content: flex-start;
  }
`;

const CountQuestions = memo(() => {
  const totalCounts = useAppSelector((store) => store.question.totalElements);

  return (
    <Wrapper>
      <span>{totalCounts.toLocaleString('ko-KR')}</span>
      <span>results</span>
    </Wrapper>
  );
});

export default CountQuestions;
