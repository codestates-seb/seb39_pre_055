import { setupServer } from 'msw/node';

import { handlers } from './index';

// node 환경에서 mocking 합니다.
export const server = setupServer(...handlers);
