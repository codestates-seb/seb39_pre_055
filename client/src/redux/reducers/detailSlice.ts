import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { DetailInitialState } from '../../types/detail';
import { getDetail } from '../actions/detailAction';

const initialState: DetailInitialState = {
  isLoading: false,
  editType: 'question',
  clickedId: null,
  sortOption: 'vote',
  data: null,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    changeDetailSortOption: (state, { payload }: PayloadAction<string>) => {
      state.sortOption = payload;
    },
    changeEditType: (state, { payload }: PayloadAction<string>) => {
      state.editType = payload;
    },
    changeClickedId: (state, { payload }: PayloadAction<number>) => {
      state.clickedId = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      // getDetail
      .addCase(getDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getDetail.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      }),
});

export const { changeDetailSortOption, changeEditType, changeClickedId } =
  detailSlice.actions;
export const detailReducer: Reducer<typeof initialState> = detailSlice.reducer;
