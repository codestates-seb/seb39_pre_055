import { rest } from 'msw';

export const handlers = [
  rest.get('/test', (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.json('sangbin'));
    // return res(ctx.status(500)); (catch문 테스트 할 때 사용)
  }),
];
