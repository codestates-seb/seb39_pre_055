import { createAsyncThunk } from '@reduxjs/toolkit';

import { Question } from '../../types/question';
import { axiosInstance } from '../../utils';
import { AppDispatch, RootState } from '../store/index';

interface AsyncThunkConfigs {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: unknown;
}

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
  views: 'view',
};

export const getSearchResults = createAsyncThunk<
  ServerQList,
  undefined,
  AsyncThunkConfigs
>('search/setResults', async (_, thunkAPI) => {
  try {
    const { keyword, page, size, sortOption } = thunkAPI.getState().search;
    const sort =
      serverSortOptions[sortOption as keyof typeof serverSortOptions];
    const response = await axiosInstance.get(
      `/v1/question/search?search=${keyword}&page=${page}&size=${size}&sort=${sort}`
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue(error);
  }
});
