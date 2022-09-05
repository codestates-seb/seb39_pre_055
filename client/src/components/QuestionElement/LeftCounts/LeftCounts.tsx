/* eslint-disable react/display-name */
import { memo } from 'react';

import { useAppSelector } from '../../../redux';
import { Container, Wrapper, Wrapper2, Wrapper3 } from './style';

interface Prop {
  id: number;
  selector: any;
}

const LeftCounts = memo(({ id, selector }: Prop) => {
  const { vote, view /* answers */ } =
    useAppSelector((state) => selector(state, id)) || {};

  return (
    <Container>
      <Wrapper>{vote} votes</Wrapper>
      <Wrapper2>{/* answers */} answers</Wrapper2>
      <Wrapper3>{view} views</Wrapper3>
    </Container>
  );
});

export default LeftCounts;
