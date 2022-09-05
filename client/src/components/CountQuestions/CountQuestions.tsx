/* eslint-disable react/display-name */
import { memo } from 'react';
import styled from 'styled-components';

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

interface Props {
  counts: number;
}

const CountQuestions = memo(({ counts }: Props) => {
  return (
    <Wrapper>
      <span>{counts.toLocaleString('ko-KR')}</span>
      <span>results</span>
    </Wrapper>
  );
});

export default CountQuestions;
