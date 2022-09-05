import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

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
  } catch (err) {
    if (!(err instanceof AxiosError)) {
      return thunkAPI.rejectWithValue(err);
    }
    const { data } = err.response || {};

    if (data.message === 'Question not found') {
      return { data: [], pageInfo: { totalElements: 0, totalPages: 1 } };
    }
    toast.error(err.message);

    return thunkAPI.rejectWithValue(err.message);
  }
});
