import { createAsyncThunk } from '@reduxjs/toolkit';

import { Question } from '../../types/question';
import { axiosInstance } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

interface PageInfo {
  totalElements: number;
  totalPages: number;
}

interface ServerQList {
  data: Question[];
  pageInfo: PageInfo;
}

export const getQuestionList = createAsyncThunk<
  ServerQList,
  undefined,
  CreateAsyncThunkTypes
>('question/getQuestionList', async (_, thunkAPI) => {
  try {
    const { page, sortOption } = thunkAPI.getState().question;
    const response = await axiosInstance.get(
      `/v1/question?page=${page}&size=15&sort=${sortOption}`
    );

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
