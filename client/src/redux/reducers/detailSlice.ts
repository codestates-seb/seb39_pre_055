import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { AnswerInfo, DetailInitialState, Tbody } from '../../types';
import {
  addAnswer,
  changeQuestionVote,
  deleteAnswer,
  deleteQuestion,
  editQuestion,
  getDetail,
} from '../actions';
import {
  changeAnswerVote,
  editAnswer,
  sortAnswers,
} from '../actions/detailAction';

const initialState: DetailInitialState = {
  isLoading: false,
  editType: 'question',
  editBody: '1',
  editAnswerId: 0,
  data: null,
  isPostLoading: false,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    changeEditBody: (state, { payload }: PayloadAction<Tbody>) => {
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
        state.editAnswerId = id as number;
      }
    },
    increaseQuestionVote: (state) => {
      if (state.data) {
        state.data.vote += 1;
      }
    },
    decreaseQuestionVote: (state) => {
      if (state.data) {
        state.data.vote -= 1;
      }
    },
    increaseAnswerVote: (state, { payload }: PayloadAction<number>) => {
      const targetIdx = state.data?.answers.data.findIndex(
        (answer) => answer.answerId === payload
      );
      if (state.data) {
        state.data.answers.data[targetIdx as number].vote += 1;
      }
    },
    decreaseAnswerVote: (state, { payload }: PayloadAction<number>) => {
      const targetIdx = state.data?.answers.data.findIndex(
        (answer) => answer.answerId === payload
      );
      if (state.data) {
        state.data.answers.data[targetIdx as number].vote -= 1;
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
      .addCase(editQuestion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
        toast.success('Successfully edited your question.');
      })
      .addCase(editQuestion.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteQuestion.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Question has been successfully deleted.');
      })
      .addCase(deleteQuestion.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(changeQuestionVote.rejected, (_, { payload }) => {
        toast.error(payload as string);
      })
      .addCase(addAnswer.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(addAnswer.fulfilled, (state, { payload }) => {
        state.isPostLoading = false;
        if (state.data?.answers === null) {
          state.data.answers = {
            data: [payload],
          };
        } else {
          state.data?.answers.data.push(payload);
        }
      })
      .addCase(addAnswer.rejected, (state, { payload }) => {
        state.isPostLoading = false;
        toast.error(payload);
      })
      .addCase(deleteAnswer.fulfilled, (state, { payload }) => {
        const targetIdx = state.data?.answers.data.findIndex(
          (answer) => answer.answerId === payload.answerId
        );
        state.data?.answers.data.splice(targetIdx as number, 1);
      })
      .addCase(deleteAnswer.rejected, (_, { payload }) => {
        toast.error(payload);
      })
      .addCase(changeAnswerVote.rejected, (_, { payload }) => {
        toast.error(payload as string);
      })
      .addCase(editAnswer.fulfilled, (state, { payload }) => {
        state.data?.answers.data.map((answer) => {
          if (answer.answerId === payload.answerId) {
            return { ...answer, body: payload.data.body };
          }
          return answer;
        });
        toast.success('Successfully edited your answer.');
      })
      .addCase(editAnswer.rejected, (_, { payload }) => {
        toast.error(payload);
      })
      .addCase(sortAnswers.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(sortAnswers.rejected, (_, { payload }) => {
        toast.error(payload);
      }),
});

export const {
  changeEditBody,
  increaseQuestionVote,
  decreaseQuestionVote,
  increaseAnswerVote,
  decreaseAnswerVote,
} = detailSlice.actions;
export const detailReducer: Reducer<DetailInitialState> = detailSlice.reducer;
