import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getSearchResults } from '../actions/searchActions';

export interface SearchResults {
  title: string;
  body: string;
  tag: string[];
  vote: number;
  view: number;
  display_name: string;
  profile_image: string;
  created_at: string;
  updated_at: string;
  question_id: number;
  user_id: number;
}

interface Search {
  keyword: string;
  isLoading: boolean;
  errorMsg: string;
  result: SearchResults[];
}

const initialState = {
  keyword: 'react',
  isLoading: true,
  errorMsg: 'err',
  result: [
    {
      title: 'java is difficult',
      body: '도와주세요~! help~',
      tag: ['java', 'javascript'],
      vote: 20,
      view: 321,
      display_name: 'dvlp',
      profile_image: 'https://www.a.com/image/good.jpg',
      created_at: '2022-08-24',
      updated_at: '2022-08-25',
      question_id: 2,
      user_id: 5,
    },
    {
      title: 'js is also...',
      body: '또 도와주세요~! help, plz~',
      tag: ['java', 'javascript'],
      vote: 19,
      view: 311,
      display_name: 'cdr',
      profile_image: 'https://www.c.com/image/better.jpg',
      created_at: '2022-08-25',
      updated_at: '2022-08-26',
      question_id: 2,
      user_id: 5,
    },
  ],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, { payload }: PayloadAction<string>) => {
      state.keyword = payload;
    },
    setResults: (state, { payload }: PayloadAction<SearchResults[]>) => {
      state.result = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getSearchResults.fulfilled,
        (state, { payload }: PayloadAction<SearchResults[]>) => {
          state.isLoading = false;
          state.result = payload;
        }
      )
      .addCase(getSearchResults.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.errorMsg = payload;
          toast.error(state.errorMsg);
        }
      }),
});

export const { setKeyword, setResults } = searchSlice.actions;
export const searchReducer: Reducer<Search> = searchSlice.reducer;
