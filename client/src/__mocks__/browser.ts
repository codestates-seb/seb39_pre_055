import { setupWorker } from 'msw';

import { handlers } from './index';

// browser 환경에서 mocking 합니다.
export const worker = setupWorker(...handlers);
