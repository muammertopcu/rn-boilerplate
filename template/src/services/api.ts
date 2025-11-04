import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery.ts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
