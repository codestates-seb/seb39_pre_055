/* eslint-disable no-restricted-globals */
import userEvent from '@testing-library/user-event';

import App from '../../App';
import { render, screen } from '../../utils/test-utils';

describe('routing', () => {
  it("사이트 접속 시 '/' path로 이동한다.", () => {
    render(<App />);
    expect(location.pathname).toBe('/');
  });

  it("Tags 탭 메뉴 클릭 시 '/tags' path로 이동한다.", () => {
    render(<App />);
    const tagMenu = screen.getByText(/tags/i);
    userEvent.click(tagMenu);
    expect(location.pathname).toBe('/tags');
    expect(screen.getByText(/show all tag synonyms/i)).toBeInTheDocument();
  });

  it("Users 탭 메뉴 클릭 시 '/users' path로 이동한다.", () => {
    render(<App />);
    const userMenu = screen.getByText(/users/i);
    userEvent.click(userMenu);
    expect(location.pathname).toBe('/users');
    expect(screen.getByRole('heading', { name: /users/i })).toBeInTheDocument();
  });

  it("Questions 탭 메뉴 클릭 시 '/' path로 이동한다.", () => {
    render(<App />, { route: '/users' });
    const tabs = screen.getAllByRole('link', { name: /questions/i });
    userEvent.click(tabs[0]);
    expect(location.pathname).toBe('/');
  });

  it("'/login' path로 이동 시 로그인 창이 나타난다.", () => {
    render(<App />, { route: '/login' });
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  it("'/logout' path로 이동 시 로그아웃 창이 나타난다.", () => {
    render(<App />, { route: '/logout' });
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  it("'/signup' path로 이동 시 회원가입 창이 나타난다.", () => {
    render(<App />, { route: '/signup' });
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  it('잘못된 path로 이동 시 Not Found 창이 나타난다.', () => {
    render(<App />, { route: '/a/a' });
    expect(
      screen.getByRole('heading', { name: 'Page not found' })
    ).toBeInTheDocument();
  });
});
