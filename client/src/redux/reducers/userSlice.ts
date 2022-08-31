import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { UserInitialState } from '../../types/user';
import { getUser } from '../actions/userAction';

const initialState: UserInitialState = {
  page: 1,
  userList: [],
  isLoading: false,
  sortOption: 'reputation',
  dateOption: 'all',
  inName: '',
  errorMsg: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    resetUserPage: (state) => {
      state.page = 1;
    },
    changeUserSortOption: (state, { payload }: PayloadAction<string>) => {
      state.sortOption = payload;
    },
    changeUserDateOption: (state, { payload }: PayloadAction<string>) => {
      state.dateOption = payload;
    },
    changeUserInName: (state, { payload }: PayloadAction<string>) => {
      state.inName = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      // getUser
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userList = payload;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.errorMsg = payload;
          toast.error(state.errorMsg);
        }
      }),
});

export const {
  changeUserPage,
  changeUserSortOption,
  resetUserPage,
  changeUserInName,
  changeUserDateOption,
} = userSlice.actions;
export const userReducer: Reducer<typeof initialState> = userSlice.reducer;
