import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { AnswerInfo, DetailInitialState } from '../../types/detail';
import {
  changeVote,
  deleteQuestion,
  editQuestion,
  getDetail,
} from '../actions';

const initialState: DetailInitialState = {
  isLoading: false,
  editType: 'question',
  editBody: '1',
  sortOption: 'vote',
  data: null,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    changeDetailSortOption: (state, { payload }: PayloadAction<string>) => {
      state.sortOption = payload;
    },
    changeEditBody: (
      state,
      {
        payload,
      }: PayloadAction<{
        type: 'question' | 'answer';
        body: string;
        answerId?: number;
      }>
    ) => {
      const { type, body, answerId: id } = payload;
      if (type === 'question') {
        state.editType = type;
        state.editBody = body;
      }
      if (type === 'answer') {
        const target = state.data?.answers.data.filter(
          (el) => el.answerId === id
        ) as Array<AnswerInfo>;
        state.editType = type;
        state.editBody = target[0].body;
      }
    },
    increaseVote: (state) => {
      if (state.data) {
        state.data.vote += 1;
      }
    },
    decreaseVote: (state) => {
      if (state.data) {
        state.data.vote -= 1;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      // getDetail
      .addCase(getDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getDetail.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(editQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editQuestion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
        toast.success('Successfully edited your question.');
      })
      .addCase(editQuestion.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success('Question has been successfully deleted.');
      })
      .addCase(deleteQuestion.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(changeVote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeVote.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(changeVote.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string);
      }),
});

export const {
  changeDetailSortOption,
  changeEditBody,
  increaseVote,
  decreaseVote,
} = detailSlice.actions;
export const detailReducer: Reducer<typeof initialState> = detailSlice.reducer;
