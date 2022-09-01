import { createSlice, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getDetail } from '../actions/detailAction';

export interface DetailInitialState {
  isLoading: boolean;
  data: DetailData | null;
}

export interface DetailData {
  questionId: number;
  questionStatus: string;
  title: string;
  body: string;
  vote: number;
  view: number;
  answers: Array<any>;
  user: {
    userId: number;
    displayName: string;
    email: string;
    password: string;
    image: string;
    userStatus: string;
  };
  questionTags: Array<{ tagName: string }>;
  createdAt: string;
  updatedAt: string;
}

const initialState: DetailInitialState = {
  isLoading: false,
  data: null,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
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

// export const {} = detailSlice.actions;
export const detailReducer: Reducer<typeof initialState> = detailSlice.reducer;
