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
