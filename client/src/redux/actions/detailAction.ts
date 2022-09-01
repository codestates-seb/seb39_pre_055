import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';
import { DetailData } from '../reducers/detailSlice';
import { CreateAsyncThunkTypes } from '../store/index';

export const getDetail = createAsyncThunk<
  DetailData,
  string,
  CreateAsyncThunkTypes
>('detail/getDetail', async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`v1/question/${payload}`);
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
