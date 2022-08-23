import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

import { testAsyncAction } from '../index';

// testSlice의 상태 타입을 정의 (types 폴더에 작성)
interface TestSliceInitialState {
  count: number;
  name: string;
  isLoading: boolean;
  error: string;
}

// testSlice의 초기 상태 값
const initialState: TestSliceInitialState = {
  count: 0,
  name: '',
  isLoading: false,
  error: '',
};

const testSlice = createSlice({
  name: 'test', // testSlice의 고유한 키 값 (다른 slice와 중복되지 않도록 작성)
  initialState, // testSlice의 초기 상태 값
  //! 모든 reducer는 상태를 직접 변경해도 괜찮습니다. (shallow copy 안해도 됨)
  reducers: {
    // 동기적으로 실행되는 코드의 action은 reducers 안에서 작성합니다. (자동으로 action이 생성됨)
    increase: (state, { payload }: PayloadAction<string>) => {
      // state -> testSlice의 현재 상태
      // { payload } -> increase() 액션의 인자로 보내줄 값 dispatch(increase('보내줄값'))
      // PayloadAction<string> -> { payload } 의 타입 지정 (generic 안에 타입만 바꿔주면 됨);
      console.log(payload);
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) =>
    builder
      // actions 폴더에서 만든 비동기 action은 extraReducers 안에 작성합니다.
      .addCase(testAsyncAction.pending, (state) => {
        // 비동기 요청 대기
        state.isLoading = true;
      })
      .addCase(testAsyncAction.fulfilled, (state, { payload }) => {
        // 비동기 요청 성공
        // { payload } -> 요청 성공시 try 문의 리턴 값이 payload로 들어옴.
        // testAsyncAction 함수 작성시 모든 타입을 정의했기 때문에 이곳에서는 따로 타입 정의를 하지 않음
        state.isLoading = false;
        state.name = payload;
      })
      .addCase(testAsyncAction.rejected, (state, { payload }) => {
        // 비동기 요청 실패
        // { payload } -> 요청 실패시 catch문의 리턴 값이 payload로 들어옴.
        // testAsyncAction 함수 작성시 모든 타입을 정의했기 때문에 이곳에서는 따로 타입 정의를 하지 않음
        state.isLoading = true;
        if (payload) {
          state.error = payload;
        }
      }),
});

export const { increase, decrease } = testSlice.actions;
export const testReducer: Reducer<typeof initialState> = testSlice.reducer;
