import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { QuestionList } from '../../types/question';
import { getQuestionList } from '../actions/questionListActions';
import { RootState } from '../store';

// types에서 interface 선언 가져와서 초기화
const initialState: QuestionList = {
  page: 1,
  totalElements: 0,
  totalPages: 1,
  questionList: [],
  sortOption: 'newest',
  inName: '',
  errorMsg: '',
  isLoading: false,
};

// 리듀서 슬라이스
const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeQPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
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
      .addCase(getQuestionList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestionList.fulfilled, (state, { payload }) => {
        const { data, pageInfo } = payload;
        const { totalElements, totalPages } = pageInfo;

        state.isLoading = false;
        state.questionList = data;
        state.totalElements = totalElements;
        state.totalPages = totalPages;
      })
      .addCase(getQuestionList.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.errorMsg = payload;
          toast.error(state.errorMsg);
        }
      }),
});

/* Selectors */
export const selectQIds = (state: RootState) =>
  state.question.questionList.map((q) => q.questionId);
export const selectQInfos = (state: RootState, id: number) =>
  state.question.questionList.filter((q) => q.questionId === id)[0];

// 리듀서 & 액션 리턴
export const { changeQPage, changeQSortOption, changeQInName } =
  questionSlice.actions;
export const questionReducer: Reducer<QuestionList> = questionSlice.reducer;
