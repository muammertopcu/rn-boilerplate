import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './baseQuery.ts';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: baseQuery,
  endpoints: _builder => ({
    // TODO: Define endpoints
  }),
});

export const {
  // TODO: Define hooks
} = exampleApi;
