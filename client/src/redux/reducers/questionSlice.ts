import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { QuestionSortInitialState } from '../../types/question';
import { getQuestionSortList } from '../actions/questionSortActions';

// types에서 interface 선언 가져와서 초기화
const initialState: QuestionSortInitialState = {
  page: 1,
  questionList: [
    {
      questionId: 29,
      questionStatus: 'QUESTION_EXIST',
      title: '업뎃 생성시간 가져오셈2',
      body: '방금 작성',
      vote: 0,
      view: 0,
      user: {
        userId: 1,
        displayName: '신짱구',
        email: 'jjg@gmail.com',
        password: 'jj1234',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800',
        userStatus: 'USER_EXIST',
      },
      questionTags: [
        {
          tagName: 'java',
        },
        {
          tagName: 'javascript',
        },
      ],
      createdAt: '2022-08-31T11:48:10',
      updatedAt: '2022-08-31T11:48:10',
    },
    {
      questionId: 28,
      questionStatus: 'QUESTION_EXIST',
      title: '업뎃 생성시간 가져오셈1',
      body: '방금 작성',
      vote: 0,
      view: 0,
      user: {
        userId: 1,
        displayName: '신짱구',
        email: 'jjg@gmail.com',
        password: 'jj1234',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800',
        userStatus: 'USER_EXIST',
      },
      questionTags: [
        {
          tagName: 'java',
        },
        {
          tagName: 'javascript',
        },
      ],
      createdAt: '2022-08-31T11:38:33',
      updatedAt: '2022-08-31T11:38:33',
    },
    {
      questionId: 26,
      questionStatus: 'QUESTION_EXIST',
      title: 'java is diffffcult',
      body: '도와주세요~! help~',
      vote: 0,
      view: 0,
      user: {
        userId: 1,
        displayName: '신짱구',
        email: 'jjg@gmail.com',
        password: 'jj1234',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800',
        userStatus: 'USER_EXIST',
      },
      questionTags: [
        {
          tagName: 'java',
        },
        {
          tagName: 'javascript',
        },
      ],
      createdAt: '2022-08-31T10:20:44',
      updatedAt: '2022-08-31T10:20:44',
    },
    {
      questionId: 26,
      questionStatus: 'QUESTION_EXIST',
      title: 'java is diffffcult',
      body: '도와주세요~! help~',
      vote: 0,
      view: 0,
      user: {
        userId: 1,
        displayName: '신짱구',
        email: 'jjg@gmail.com',
        password: 'jj1234',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800',
        userStatus: 'USER_EXIST',
      },
      questionTags: [
        {
          tagName: 'java',
        },
        {
          tagName: 'javascript',
        },
      ],
      createdAt: '2022-08-31T10:20:44',
      updatedAt: '2022-08-31T10:20:44',
    },
    {
      questionId: 26,
      questionStatus: 'QUESTION_EXIST',
      title: 'java is diffffcult',
      body: '도와주세요~! help~',
      vote: 0,
      view: 0,
      user: {
        userId: 1,
        displayName: '신짱구',
        email: 'jjg@gmail.com',
        password: 'jj1234',
        image:
          'https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800',
        userStatus: 'USER_EXIST',
      },
      questionTags: [
        {
          tagName: 'java',
        },
        {
          tagName: 'javascript',
        },
      ],
      createdAt: '2022-08-31T10:20:44',
      updatedAt: '2022-08-31T10:20:44',
    },
  ],
  sortOption: 'newest',
  inName: '',
  errorMsg: 'err!',
  isLoading: false,
};

// 리듀서 슬라이스
const questionSlice = createSlice({
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
  questionSlice.actions;
export const questionReducer: Reducer<typeof initialState> =
  questionSlice.reducer;
