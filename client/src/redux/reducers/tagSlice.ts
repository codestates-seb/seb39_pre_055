import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { TagInitialState } from '../../types';
import { getTags } from '../actions/tagActions';

const initialState: TagInitialState = {
  page: 1,
  tagList: [],
  isLoading: false,
  sortOption: 'popular',
  inName: '',
  errorMsg: '',
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    changeSortOption: (state, { payload }: PayloadAction<string>) => {
      state.sortOption = payload;
    },
    changeInName: (state, { payload }: PayloadAction<string>) => {
      state.inName = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      // getTags
      .addCase(getTags.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTags.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tagList = payload;
      })
      .addCase(getTags.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.errorMsg = payload;
          toast.error(state.errorMsg);
        }
      }),
});

export const { changePage, changeSortOption, resetPage, changeInName } =
  tagSlice.actions;
export const tagReducer: Reducer<typeof initialState> = tagSlice.reducer;
