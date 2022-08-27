/* eslint-disable jsx-a11y/no-autofocus */
import { useEffect, useRef } from 'react';

import { Container, FaceBook, LinkContainer, Twitter } from './style';

const AnchorCard = () => {
  const ref = useRef<HTMLInputElement>(null);
  const currentUrl = window.location.href;

  useEffect(() => {
    ref.current?.focus();
  });

  return (
    <Container>
      <p>
        Share a link to this question <span>(Inclues your use id)</span>
      </p>
      <input
        ref={ref}
        type="text"
        value={currentUrl}
        onFocus={(e) => e.target.select()}
      />
      <LinkContainer>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(currentUrl)}
        >
          Copy link
        </button>
        <div>
          <a href="https://ko-kr.facebook.com/" target="_black">
            <FaceBook />
          </a>
          <a href="https://twitter.com/i/flow/login" target="_black">
            <Twitter />
          </a>
        </div>
      </LinkContainer>
    </Container>
  );
};

export default AnchorCard;
