import styled from 'styled-components';

import { ReactComponent as NoResult } from '../../assets/img/search.svg';

export const SBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  height: 60vh;
  line-height: 1.5rem;
`;

export const SNoResultSVG = styled(NoResult)`
  display: flex;
  align-items: center;
  fill: grey;
  width: 100%;
`;

export const SNotFoundP = styled.p`
  font-size: 1.1rem;
  margin: 20px 0px 5px 0px;

  strong {
    font-weight: bold;
  }
`;

export const STryP = styled.p`
  font-size: 0.8rem;
`;

interface NoResultProps {
  keyword: string;
}

const NoSearchResult = ({ keyword }: NoResultProps) => {
  return (
    <SBox>
      <SNoResultSVG />
      <SNotFoundP>
        We couldn&apos;t find anything for <strong>{keyword}</strong>
      </SNotFoundP>
      <STryP>Try different or less specific keywords.</STryP>
    </SBox>
  );
};

export default NoSearchResult;
