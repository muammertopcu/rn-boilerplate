import {createSlice} from '@reduxjs/toolkit';

export interface AuthSliceState {
  token: string | undefined;
}
const initialState: AuthSliceState = {
  token: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setLogout(state) {
      state.token = undefined;
    },
  },
});

export const {setToken, setLogout} = authSlice.actions;
