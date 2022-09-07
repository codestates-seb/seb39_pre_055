import React from 'react';

import {
  Container,
  ImageContainer,
  InnerContainet,
  IsnotRobot,
  LinkContainer,
  Privacy,
  RobotComment,
  StyledInput,
  StyledLabel,
  StyledP,
  Terms,
} from './style';

const Checkbox = () => {
  return (
    <Container>
      <InnerContainet>
        <IsnotRobot>
          <StyledLabel>
            <StyledInput type="checkbox" />
            <StyledP />
          </StyledLabel>
          <RobotComment>I&apos;m not a robot</RobotComment>
        </IsnotRobot>
        <ImageContainer>
          <img
            width="24"
            alt="스크린샷 2022-09-06 오전 1 02 45"
            src="https://user-images.githubusercontent.com/104320234/188497360-1a703ed8-3d90-4b89-951c-c571e013f705.png"
          />
          <span>reCAPTCHA</span>
        </ImageContainer>
        <LinkContainer>
          <Privacy
            href="https://www.google.com/intl/en/policies/terms/"
            target="_blank"
          >
            Privacy
          </Privacy>
          <span>-</span>
          <Terms
            href="https://www.google.com/intl/en/policies/terms/"
            target="_blank"
          >
            Terms
          </Terms>
        </LinkContainer>
      </InnerContainet>
    </Container>
  );
};

export default Checkbox;
