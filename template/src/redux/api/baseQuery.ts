import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store.ts';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:3000',
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
