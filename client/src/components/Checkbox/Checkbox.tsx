import React from 'react';
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';
import styled from 'styled-components';

interface Prop {
  text: string;
}

const StyledInput = styled.input`
  appearance: none;
  width: 0.9rem;
  height: 0.9rem;
  border: 1.5px solid var(--black-100);
  border-radius: 0.2rem;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 0;
    background-repeat: no-repeat;
    background-color: var(--blue-600);
  }
  &:hover {
    outline: 3px solid var(--blue-100);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 4px;
`;

const Info = styled.span`
  font-size: 12px;
  line-height: 15.7px;
  font-weight: 400;
  color: var(--black-500);
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
