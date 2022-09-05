/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnswerInfo, DetailData, EditBody } from '../../types';
import { AnswerPayload, Answers } from '../../types/detail';
import { authHeader, axiosInstance } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

export const getDetail = createAsyncThunk<
  DetailData,
  string,
  CreateAsyncThunkTypes
>('detail/getDetail', async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.get(
      `/v1/question/${payload}?page=1&size=999&sort=vote`
    );
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editQuestion = createAsyncThunk<
  DetailData,
  EditBody,
  CreateAsyncThunkTypes
>('detail/editQuestion', async (payload, thunkAPI) => {
  const { id, title, body, questionTags } = payload;
  const requestBody = {
    title,
    body,
    questionTags,
  };
  try {
    const response = await axiosInstance.patch(
      `/v1/user/question/${id}`,
      requestBody,
      authHeader(thunkAPI)
    );
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteQuestion = createAsyncThunk<
  DetailData,
  string,
  CreateAsyncThunkTypes
>('detail/deleteQuestion', async (payload: string, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().user;
    if (user) {
      const response = await axiosInstance.patch(
        `/v1/user/question/${payload}`,
        {
          questionStatus: 'QUESTION_NOT_EXIST',
        },
        authHeader(thunkAPI)
      );
      return response.data.data;
    }
  } catch (error: any) {
    if (error.response.data.status === 403) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changeQuestionVote = createAsyncThunk<
  undefined,
  string,
  CreateAsyncThunkTypes
>('detail/changeQuestionVote', async (payload, thunkAPI) => {
  try {
    const { data } = thunkAPI.getState().detail;
    const body = {
      vote: data?.vote,
    };
    await axiosInstance.patch(
      `/v1/question/vote/${payload}`,
      body,
      authHeader(thunkAPI)
    );
    return;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addAnswer = createAsyncThunk<
  AnswerInfo,
  AnswerPayload,
  CreateAsyncThunkTypes
>('detail/addAnswer', async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.post(
      '/v1/user/answer/write',
      payload,
      authHeader(thunkAPI)
    );
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteAnswer = createAsyncThunk<
  AnswerInfo,
  number,
  CreateAsyncThunkTypes
>('detail/deleteAnswer', async (payload, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().user;
    if (user) {
      const response = await axiosInstance.patch(
        `v1/user/answer/${payload}`,
        {
          answerStatus: 'ANSWER_NOT_EXIST',
        },
        authHeader(thunkAPI)
      );

      return response.data.data;
    }
  } catch (error: any) {
    if (error.response.status === 403) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changeAnswerVote = createAsyncThunk<
  undefined,
  number,
  CreateAsyncThunkTypes
>('/detail/changeAnswerVote', async (payload, thunkAPI) => {
  const { data } = thunkAPI.getState().detail.data?.answers as Answers;
  const idx = data.findIndex((answer) => answer.answerId === payload);
  try {
    await axiosInstance.patch(`/v1/answer/vote/${payload}`, {
      vote: data[idx].vote,
    });
    return;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editAnswer = createAsyncThunk<
  {
    answerId: number;
    data: AnswerInfo;
  },
  {
    answerId: number;
    body: string;
  },
  CreateAsyncThunkTypes
>('/detail/editAnswer', async (payload, thunkAPI) => {
  const { answerId, body } = payload;
  try {
    const response = await axiosInstance.patch(
      `/v1/user/answer/${answerId}`,
      {
        body,
      },
      authHeader(thunkAPI)
    );
    return { answerId, data: response.data.data };
  } catch (error: any) {
    if (error.response.data.status === 403) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const sortAnswers = createAsyncThunk<
  DetailData,
  {
    questionId: string;
    value: string;
  },
  CreateAsyncThunkTypes
>('detail/sortAnswers', async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.get(
      `/v1/question/${payload.questionId}?page=1&size=999&sort=${payload.value}`
    );
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
