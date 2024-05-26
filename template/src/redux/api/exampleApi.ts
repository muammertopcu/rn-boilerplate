import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './baseQuery.ts';

export const eventsApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: baseQuery,
  endpoints: _builder => ({
    // TODO: Define endpoints
  }),
});

export const {} = eventsApi;
