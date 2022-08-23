import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { CreateAsyncThunkTypes, increase } from '../index';

export const testAsyncAction = createAsyncThunk<
  string, // 요청 성공시 try 문의 리턴 타입 정의
  string, // action의 인자로 전달할 값의 타입 정의 dispatch(testAsyncAction('값'))
  CreateAsyncThunkTypes // thunkAPI에 포함된 메서드들의 타입 정의
>('test/testAsyncAction', async (payload, thunkAPI) => {
  try {
    console.log(payload);

    thunkAPI.dispatch(increase('보내줄값')); // 비동기 액션 함수 안에서 dispatch 가능
    thunkAPI.getState(); // 비동기 액션 함수 안에서 store의 현재 상태 값에 접근 가능

    const response = await axios.get('http://localhost:3030/test');
    return response.data; // testAsyncAction.fulfilled 의 payload로 전달
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error); // testAsyncAction.rejected 의 payload로 전달
  }
});
