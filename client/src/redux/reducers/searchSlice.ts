import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

import { Question } from '../../types/question';
import { getSearchResults } from '../actions/searchActions';
import { RootState } from '../store';

interface Search {
  keyword: string;
  page: number;
  totalElements: number;
  totalPages: number;
  size: number;
  sortOption: string;
  isLoading: boolean;
  errorMsg: unknown;
  result: Question[];
}

const initialState: Search = {
  keyword: '',
  page: 1,
  totalElements: 0,
  totalPages: 1,
  size: 14,
  sortOption: 'votes',
  isLoading: false,
  errorMsg: '',
  result: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, { payload }: PayloadAction<string>) => {
      state.keyword = payload;
    },
    changeQPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    changeQSortOption: (state, { payload }: PayloadAction<string>) => {
      state.sortOption = payload;
    },
    setResults: (state, { payload }: PayloadAction<Question[]>) => {
      state.result = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, { payload }) => {
        const { data, pageInfo } = payload;
        const { totalElements, totalPages } = pageInfo;

        state.isLoading = false;
        state.result = data;
        state.totalElements = totalElements;
        state.totalPages = totalPages;
      })
      .addCase(getSearchResults.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      }),
});

/* Selectors */
export const selectResultIds = (state: RootState) =>
  state.search.result.map((q) => q.questionId);
export const selectInfos = (state: RootState, id: number) =>
  state.search.result.filter((q) => q.questionId === id)[0];

export const { setKeyword, setResults, changeQPage, changeQSortOption } =
  searchSlice.actions;
export const searchReducer: Reducer<Search> = searchSlice.reducer;
