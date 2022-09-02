import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UserInfo } from '../../types';
import { STACK_EXCHANGE_URL } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

export const getUser = createAsyncThunk<
  Array<UserInfo>,
  undefined,
  CreateAsyncThunkTypes
>('user/getUser', async (_, thunkAPI) => {
  try {
    const { page, sortOption, timeStamp, inName } = thunkAPI.getState().user;
    const response = await axios.get(
      `${STACK_EXCHANGE_URL}/users?page=${page}&pagesize=72&fromdate=${timeStamp
        .toString()
        .slice(0, 10)}&todate=${Date.now()
        .toString()
        .slice(
          0,
          10
        )}&order=desc&sort=${sortOption}&inname=${inName}&site=stackoverflow`
    );
    return response.data.items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
