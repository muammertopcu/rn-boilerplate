import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './slices/authSlice.ts';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
