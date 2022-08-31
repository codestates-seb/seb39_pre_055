import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { UserInitialState } from '../../types/user';
import { getSpecificDate } from '../../utils';
import { USER_DUMMY_DATA } from '../../utils/user-data';
import { getUser } from '../actions/userAction';

const initialState: UserInitialState = {
  page: 1,
  userList: USER_DUMMY_DATA,
  isLoading: false,
  sortOption: 'reputation',
  dateOption: 'all',
  timeStamp: '',
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
      switch (payload) {
        case 'all':
          state.timeStamp = '';
          break;
        case 'week':
          state.timeStamp = new Date(getSpecificDate('-', -7)).getTime();
          break;
        case 'month':
          state.timeStamp = new Date(getSpecificDate('-', -30)).getTime();
          break;
        case 'quarter':
          state.timeStamp = new Date(getSpecificDate('-', -180)).getTime();
          break;
        case 'year':
          state.timeStamp = new Date(getSpecificDate('-', -365)).getTime();
          break;
        default:
          state.timeStamp = '';
      }
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
