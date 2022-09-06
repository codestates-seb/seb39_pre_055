import React from 'react';

import { Container, Info, StyledInput, StyledLabel, StyledP } from './style';

const Checkbox = () => {
  return (
    <Container>
      <StyledLabel>
        <StyledInput type="checkbox" />
        <StyledP />
      </StyledLabel>
      <Info>
        Opt-in to receive occasional product updates, user research invitations,
        company announcements, and digests.
      </Info>
    </Container>
  );
};

export default Checkbox;
