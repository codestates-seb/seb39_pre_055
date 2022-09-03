/* eslint-disable testing-library/no-render-in-setup */
import userEvent from '@testing-library/user-event';

import { DateButton } from '../../components';
import { render, screen } from '../../utils/test-utils';

describe('DateButton Component', () => {
  let fn: jest.Mock<any, any>;

  beforeEach(() => {
    fn = jest.fn();
    render(
      <DateButton nameList={['week', 'all']} clickedName="week" onClick={fn} />
    );
  });

  it('nameList prop의 길이에 맞게 버튼이 생성된다.', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('clickedName과 같은 name의 버튼은 폰트 두께가 변경된다.', () => {
    const clickedButton = screen.getByRole('button', { name: 'week' });
    expect(clickedButton).toHaveStyle('font-weight: 700');
  });

  it('버튼을 클릭하면 콜백 함수가 실행된다.', () => {
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0]);
    expect(fn).toBeCalledTimes(1);
    userEvent.click(buttons[1]);
    expect(fn).toBeCalledTimes(2);
  });

  it('버튼을 클릭하면 콜백 함수의 인자로 name을 전달한다.', () => {
    const clickedButton = screen.getByRole('button', { name: 'week' });
    userEvent.click(clickedButton);
    expect(fn).toBeCalledWith('week');
  });
});
