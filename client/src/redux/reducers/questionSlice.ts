import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

import { answer1, answer2, question } from '../../utils/markdown-data';

interface QuestionSliceState {
  question: string;
  answerList: Array<string>;
}

const initialState: QuestionSliceState = {
  question,
  answerList: [answer1, answer2],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addAnswer: (state, { payload }: PayloadAction<string>) => {
      state.answerList.push(payload);
    },
  },
});

export const { addAnswer } = questionSlice.actions;
export const questionReducer: Reducer<typeof initialState> =
  questionSlice.reducer;
