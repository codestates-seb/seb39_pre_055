import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { QuestionSortInitialState } from '../../types/questionSort';
import { getQuestionSortList } from '../actions/questionSortActions';

// types에서 interface 선언 가져와서 초기화
const initialState: QuestionSortInitialState = {
  page: 1,
  questionList: [],
  sortOption: 'newest',
  inName: '',
  errorMsg: 'err!',
  isLoading: false,
};

// 리듀서 슬라이스
const questionSortSlice = createSlice({
  name: 'questionSort',
  initialState,
  reducers: {
    changeQPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    resetQPage: (state) => {
      state.page = 1;
    },
    changeQSortOption: (state, { payload }: PayloadAction<string>) => {
      state.sortOption = payload;
    },
    changeQInName: (state, { payload }: PayloadAction<string>) => {
      state.inName = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getQuestionSortList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestionSortList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.questionList = payload;
      })
      .addCase(getQuestionSortList.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.errorMsg = payload;
          toast.error(state.errorMsg);
        }
      }),
});
// 리듀서 & 액션 리턴
export const { changeQPage, changeQSortOption, resetQPage, changeQInName } =
  questionSortSlice.actions;
export const questionSortReducer: Reducer<typeof initialState> =
  questionSortSlice.reducer;
