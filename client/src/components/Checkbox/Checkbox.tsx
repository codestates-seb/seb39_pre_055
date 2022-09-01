import React from 'react';
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';
import styled from 'styled-components';

// interface Prop{
//   checked:
// };

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.span`
  font-size: 12px;
  line-height: 15.7px;
  font-weight: 400;
`;

// const CheckboxContainer = styled.span`
//   display: inline-block;
//   border: ${(props) => (props.checked ? 'none' : 'solid 0.1rem #dddddd')};
// 	background: ${(props) => (props.checked ? 'black' : 'white')};
// `;

// const StyledCheckbox =

const Checkbox = () => {
  return (
    <Container>
      {/* <CheckboxContainer>
        <StyledCheckbox>
        </StyledCheckbox>
      </CheckboxContainer> */}
      <Info>
        Opt-in to receive occasional product updates, user research invitations,
        company announcements, and digests.
      </Info>
    </Container>
  );
};

export default Checkbox;
