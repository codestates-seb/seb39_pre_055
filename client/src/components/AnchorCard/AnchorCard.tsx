/* eslint-disable jsx-a11y/no-autofocus */
import { useEffect, useRef } from 'react';

import { Container, FaceBook, LinkContainer, Twitter } from './style';

interface Prop {
  type: 'question' | 'answer';
}

const AnchorCard = ({ type }: Prop) => {
  const ref = useRef<HTMLInputElement>(null);
  const currentUrl = window.location.href;

  useEffect(() => {
    ref.current?.focus();
  });

  return (
    <Container id="share-modal">
      <p>Share a link to this {type}</p>
      <input
        ref={ref}
        type="text"
        value={currentUrl}
        onFocus={(e) => e.target.select()}
        readOnly
      />
      <LinkContainer id="link-container">
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
