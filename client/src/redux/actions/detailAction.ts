import { createAsyncThunk } from '@reduxjs/toolkit';

import { DetailData } from '../../types';
import { axiosInstance } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

export const getDetail = createAsyncThunk<
  DetailData,
  string,
  CreateAsyncThunkTypes
>('detail/getDetail', async (payload, thunkAPI) => {
  try {
    const { sortOption } = thunkAPI.getState().detail;
    const response = await axiosInstance.get(
      `/v1/question/${payload}?page=1&size=3&sort=${sortOption}`
    );
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

interface EditBody {
  id: number;
  title: string;
  body: string;
  questionTags: string[];
}

export const editQuestion = createAsyncThunk<
  DetailData,
  EditBody,
  CreateAsyncThunkTypes
>('detail/editQuestion', async (payload, thunkAPI) => {
  const { id, title, body, questionTags } = payload;
  try {
    const response = await axiosInstance.patch(`/v1/question/${id}`, {
      title,
      body,
      questionTags,
    });
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteQuestion = createAsyncThunk(
  'detail/deleteQuestion',
  async (payload: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/v1/question/${payload}`, {
        questionStatus: 'QUESTION_NOT_EXIST',
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
