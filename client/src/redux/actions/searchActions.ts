import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';
import { SearchResults } from '../reducers/searchSlice';
import { AppDispatch, RootState } from '../store/index';

type AsyncThunkConfigs = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: unknown;
};

export const getSearchResults = createAsyncThunk<
  SearchResults[],
  undefined,
  AsyncThunkConfigs
>('search/setResults', async (_, thunkAPI) => {
  try {
    const { keyword } = thunkAPI.getState().search;
    const response = await axiosInstance.get(
      `/v1/question/search?search=${keyword}`
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue(error);
  }
});
