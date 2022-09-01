import { createSlice, Reducer } from '@reduxjs/toolkit';

import { question } from '../../utils';

export interface DetailInitialState {
  isLoading: boolean;
  questionId: number;
  questionStatus: string;
  title: string;
  body: string;
  vote: number;
  view: number;
  user: {
    userId: number;
    displayName: string;
    email: string;
    password: string;
    image: string;
    userStatus: string;
  };
  questionTags: Array<{ tagName: string }>;
  createdAt: string;
  updatedAt: string;
}

const initialState: DetailInitialState = {
  isLoading: false,
  questionId: 28,
  questionStatus: 'QUESTION_EXIST',
  title: 'React Router v5.1.0 with hooks',
  body: question,
  vote: 3,
  view: 50,
  user: {
    userId: 1,
    displayName: 'mosangbin',
    email: 'mosangbin@gmail.com',
    password: '1234',
    image: 'https://graph.facebook.com/1616279655126812/picture?type=large',
    userStatus: 'USER_EXIST',
  },
  questionTags: [
    {
      tagName: 'javascript',
    },
    {
      tagName: 'java',
    },
  ],
  createdAt: '2022-09-01T00:20:09',
  updatedAt: '2022-09-01T04:12:36.714032',
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  // extraReducers: (builder) =>
  //   builder
  //     // getDetail
  //     .addCase(getDetail.pending, (state) => {
  //       state.isLoading = true;
  //     }),
});

// export const {} = detailSlice.actions;
export const detailReducer: Reducer<typeof initialState> = detailSlice.reducer;
