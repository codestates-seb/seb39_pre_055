/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

import AnchorCard from '../../components/AnchorCard/AnchorCard';

describe('AnchorCard Component', () => {
  let p: HTMLParagraphElement;
  it('type prop에 따라 text가 변경된다. (question)', () => {
    render(<AnchorCard type="question" />);
    p = screen.getByTestId('text');
    expect(p).toHaveTextContent('Share a link to this question');
  });

  it('type prop에 따라 text가 변경된다. (answer)', () => {
    render(<AnchorCard type="answer" />);
    p = screen.getByTestId('text');
    expect(p).toHaveTextContent('Share a link to this answer');
  });
});
