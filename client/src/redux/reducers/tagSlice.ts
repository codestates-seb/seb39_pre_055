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
    changeTagPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    resetTagPage: (state) => {
      state.page = 1;
    },
    changeTagSortOption: (state, { payload }: PayloadAction<string>) => {
      state.sortOption = payload;
    },
    changeTagInName: (state, { payload }: PayloadAction<string>) => {
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

export const {
  changeTagPage,
  changeTagSortOption,
  resetTagPage,
  changeTagInName,
} = tagSlice.actions;
export const tagReducer: Reducer<typeof initialState> = tagSlice.reducer;
