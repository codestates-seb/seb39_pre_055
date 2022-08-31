import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

export interface TagInitialState {
  page: number;
  tagList: Array<any>;
  sortOption: string;
  inName: string;
  isLoading: boolean;
  errorMsg: string;
}

const initialState = {
  page: 1,
  userList: [],
  isLoading: false,
  sortOption: 'popular',
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
    changeUserInName: (state, { payload }: PayloadAction<string>) => {
      state.inName = payload;
    },
  },
});

export const {
  changeUserPage,
  changeUserSortOption,
  resetUserPage,
  changeUserInName,
} = userSlice.actions;
export const userReducer: Reducer<typeof initialState> = userSlice.reducer;
