/* eslint-disable react/display-name */
import { memo } from 'react';

import { getQInfos, useAppSelector } from '../../../redux';
import { Container, Wrapper, Wrapper2, Wrapper3 } from './style';

interface Prop {
  id: number;
}

const LeftCounts = memo(({ id }: Prop) => {
  const { vote, view /* answers */ } = useAppSelector((state) =>
    getQInfos(state, id)
  );

  return (
    <Container>
      <Wrapper>{vote} votes</Wrapper>
      <Wrapper2>{/* answers */} answers</Wrapper2>
      <Wrapper3>{view} views</Wrapper3>
    </Container>
  );
});

export default LeftCounts;
