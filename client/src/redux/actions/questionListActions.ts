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

const serverSortOptions = {
  newest: 'createdAt',
  votes: 'vote',
};

export const getQuestionList = createAsyncThunk<
  ServerQList,
  undefined,
  CreateAsyncThunkTypes
>('question/getQuestionList', async (_, thunkAPI) => {
  try {
    const { page, sortOption } = thunkAPI.getState().question;
    const sort =
      serverSortOptions[sortOption as keyof typeof serverSortOptions];
    const response = await axiosInstance.get(
      `/v1/question?page=${page}&size=15&sort=${sort}`
    );

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
