import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { UserInitialState } from '../../types/user';
import { getSpecificDate, removeUserFromLocalStorage } from '../../utils';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from '../../utils/localStorage';
import { getUserList, loginUser, registerUser } from '../actions';

const initialState: UserInitialState = {
  user: getUserFromLocalStorage(),
  // {
  //   userId: 1,
  //   displayName: 'sangbin',
  //   email: 'verz@gmail.com',
  //   password: 'fd423423ccd34@!s',
  //   image:
  //     'https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800',
  //   userStatus: 'USER_EXIST',
  // },
  page: 1,
  userList: [],
  isLoading: false,
  isSignupDone: false,
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
    logOutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
      toast.success('Logout completed successfully.');
    },
    changeUserPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    changeUserSortOption: (state, { payload }: PayloadAction<string>) => {
      state.page = 1;
      state.sortOption = payload;
    },
    changeUserDateOption: (state, { payload }: PayloadAction<string>) => {
      state.page = 1;
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
      state.page = 1;
      state.inName = payload;
    },
    changeSignupIsDone: (state) => {
      state.isSignupDone = false;
    },
  },
  extraReducers: (builder) =>
    builder
      // getUser
      .addCase(getUserList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userList = payload;
      })
      .addCase(getUserList.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.errorMsg = payload;
          toast.error(state.errorMsg);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(state.user);
        toast.success(`Hello, ${payload.displayName}!`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isSignupDone = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSignupDone = true;
        toast.success('Sign up has been successfully completed.');
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSignupDone = false;
        toast.error(payload);
      }),
});

export const {
  changeUserPage,
  changeUserSortOption,
  changeUserInName,
  changeUserDateOption,
  logOutUser,
  changeSignupIsDone,
} = userSlice.actions;
export const userReducer: Reducer<typeof initialState> = userSlice.reducer;
