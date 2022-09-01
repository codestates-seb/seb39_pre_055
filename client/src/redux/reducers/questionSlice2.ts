import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

import { answer1, answer2, question } from '../../utils/markdown-data';

interface Question {
  id: number;
  title: string;
  body: string;
  tags: Array<string>;
  answerList: Array<{ id: number; body: string }>;
}

interface QuestionSliceState {
  question: string;
  answerList: Array<string>;
  questionList: Array<Question>;
}

const initialState: QuestionSliceState = {
  question,
  answerList: [answer1, answer2],
  questionList: [
    {
      id: 1,
      title: 'Stop an array while finding string',
      body: question,
      tags: ['javascript', 'arrays', 'string'],
      answerList: [
        {
          id: 2,
          body: answer1,
        },
        {
          id: 3,
          body: answer2,
        },
      ],
    },
  ],
};

const questionSlice2 = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addAnswer: (state, { payload }: PayloadAction<string>) => {
      state.answerList.push(payload);
    },
    editQuestion: (state, { payload }) => {
      const { title, body, tags } = payload;
      state.questionList[0].title = title;
      state.questionList[0].body = body;
      state.questionList[0].tags = tags;
    },
  },
});

export const { addAnswer, editQuestion } = questionSlice2.actions;
export const questionReducer2: Reducer<typeof initialState> =
  questionSlice2.reducer;
