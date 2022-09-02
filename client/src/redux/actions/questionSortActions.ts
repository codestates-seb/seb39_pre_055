import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Question } from '../../types/question';
import { STACK_EXCHANGE_URL } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

export const getQuestionSortList = createAsyncThunk<
  Array<Question>,
  undefined,
  CreateAsyncThunkTypes
>('questionSort/getQuestionSortList', async (_, thunkAPI) => {
  try {
    const { page, sortOption, inName } = thunkAPI.getState().tag;
    const response = await axios.get(
      `${STACK_EXCHANGE_URL}/?page=${page}&pagesize=15&order=desc&sort=${sortOption}&inname=${inName}&site=stackoverflow`
    ); // ?!?
    return response.data.items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
