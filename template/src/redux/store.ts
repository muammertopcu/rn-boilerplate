import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './slices/authSlice.ts';
import {exampleApi} from './api/exampleApi.ts';

const store = configureStore({
  reducer: {
    [exampleApi.reducerPath]: exampleApi.reducer,
    auth: authSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([exampleApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
