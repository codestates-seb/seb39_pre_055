import App from '../App';
import { render, screen } from '../utils/test-utils';

describe('routing', () => {
  it("'/' path는 모든 질문 목록의 리스트를 렌더링 한다.", () => {
    render(<App />, { route: '/' });
    expect(screen.getByText(/all questions/i)).toBeInTheDocument();
  });
});
