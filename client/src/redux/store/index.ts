import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { tagReducer, testReducer } from '../reducers';
import { questionReducer } from '../reducers/questionSlice';

export const store = configureStore({
  reducer: {
    test: testReducer,
    question: questionReducer,
    tag: tagReducer,
    // 앞으로 추가하게 될 전역 상태는 관심사에 따라 파일을 분리한 후 이곳에 추가해주세요.
    // user: userReducer,  -> user정보에 관련된 전역 상태
    // mountain: mountainReducer,  -> 산과 관련된 전역 상태
    // review: reviewReducer, -> review와 관련된 전역 상태
  },
  devTools: process.env.NODE_ENV !== 'production', // 크롬 익스텐션 Redux DevTools 설치 해주세요.
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// component에서 action을 dispatch 하고 싶다면 useAppDispatch를 사용하세요.
export const useAppDispatch: () => AppDispatch = useDispatch;
// component에서 store의 상태를 사용하고 싶다면 useAppSelector를 사용하세요.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 비동기 action에서 사용합니다. (createAsyncThunk)
export type CreateAsyncThunkTypes = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
};
