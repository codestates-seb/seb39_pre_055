import { createAsyncThunk } from '@reduxjs/toolkit';

/* eslint-disable consistent-return */
import { AnswerInfo, DetailData, EditBody } from '../../types';
import { authHeader, axiosInstance } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

export const getDetail = createAsyncThunk<
  DetailData,
  string,
  CreateAsyncThunkTypes
>('detail/getDetail', async (payload, thunkAPI) => {
  try {
    const { sortOption } = thunkAPI.getState().detail;
    const response = await axiosInstance.get(
      `/v1/question/${payload}?page=1&size=999&sort=${sortOption}`
    );
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
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
    const response = await axiosInstance.patch(
      `/v1/user/question/${payload}`,
      {
        questionStatus: 'QUESTION_NOT_EXIST',
      },
      authHeader(thunkAPI)
    );
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changeVote = createAsyncThunk<any, string, CreateAsyncThunkTypes>(
  'detail/changeVote',
  async (payload, thunkAPI) => {
    try {
      const { data } = thunkAPI.getState().detail;
      const body = {
        vote: data?.vote,
      };
      const response = await axiosInstance.patch(
        `/v1/question/vote/${payload}`,
        body,
        authHeader(thunkAPI)
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export interface AnswerPayload {
  questionId: string;
  body: string;
}

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
    // thunkAPI.dispatch(getDetail(payload.questionId));
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
