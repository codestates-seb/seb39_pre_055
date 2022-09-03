import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { LoginPayload, User, UserInfo } from '../../types';
import { axiosInstance, STACK_EXCHANGE_URL } from '../../utils';
import { CreateAsyncThunkTypes } from '../store/index';

export const getUserList = createAsyncThunk<
  Array<UserInfo>,
  undefined,
  CreateAsyncThunkTypes
>('user/getUser', async (_, thunkAPI) => {
  try {
    const { page, sortOption, timeStamp, inName } = thunkAPI.getState().user;
    const response = await axios.get(
      `${STACK_EXCHANGE_URL}/users?page=${page}&pagesize=72&fromdate=${timeStamp
        .toString()
        .slice(0, 10)}&todate=${Date.now()
        .toString()
        .slice(
          0,
          10
        )}&order=desc&sort=${sortOption}&inname=${inName}&site=stackoverflow`
    );
    return response.data.items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk<
  User,
  LoginPayload,
  CreateAsyncThunkTypes
>('user/loginUser', async (payload, thunkAPI) => {
  try {
    const { email, password } = payload;
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });
    // login response 완료되면 변경.
    return {
      userId: 1,
      displayName: 'sangbin',
      email: 'mosangbin@gmail.com',
      password: '1234',
      image:
        'data:image/jpeg;base64,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',
      userStatus: 'USER_EXIST',
      token: response.headers.authorization,
    };
  } catch (error: any) {
    if (error.response.status === 401) {
      return thunkAPI.rejectWithValue('Check your email and password.');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const registerUser = createAsyncThunk<
  undefined,
  LoginPayload,
  CreateAsyncThunkTypes
>('user/registerUser', async (payload, { rejectWithValue }) => {
  console.log(payload);
  const { displayName, email, password } = payload;
  try {
    return await axiosInstance.post('/v1/sign-up', {
      displayName,
      email,
      password,
    });
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
