import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Tag } from '../../types';
import { STACK_EXCHANGE_URL } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

export const getTags = createAsyncThunk<
  Array<Tag>,
  undefined,
  CreateAsyncThunkTypes
>('tag/getTags', async (_, thunkAPI) => {
  try {
    const { page } = thunkAPI.getState().tag;
    const response = await axios.get(
      `${STACK_EXCHANGE_URL}/tags?page=${page}&pagesize=90&order=desc&sort=popular&site=stackoverflow`
    );
    return response.data.items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  }
});
