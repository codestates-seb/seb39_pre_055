/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';
import { SearchResults } from '../reducers/searchSlice';
import { CreateAsyncThunkTypes } from '../store/index';

export const getSearchResults = createAsyncThunk<
  SearchResults[],
  undefined,
  CreateAsyncThunkTypes
>('search/setResults', async (_, thunkAPI) => {
  try {
    const { keyword } = thunkAPI.getState().search;
    const response = await axiosInstance.get(
      `/v1/question/search?search=${keyword}`
    );

    console.log(response);
    return response.data.items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
