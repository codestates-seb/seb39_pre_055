import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { TagInitialState } from '../../types/tag';
import { getTags } from '../actions/tagActions';

const initialState: TagInitialState = {
  page: 1,
  tagList: [],
  isLoading: false,
  errorMsg: '',
};

const tagSlice = createSlice({
  name: 'tag', // testSlice의 고유한 키 값 (다른 slice와 중복되지 않도록 작성)
  initialState, // testSlice의 초기 상태 값
  reducers: {
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
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

export const { changePage } = tagSlice.actions;
export const tagReducer: Reducer<typeof initialState> = tagSlice.reducer;
