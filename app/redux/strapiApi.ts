// store/strapiApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const strapiApi = createApi({
  reducerPath: "strapiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://informed-prosperity-dfd4355293.strapiapp.com/api",
  }),
  endpoints: (builder) => ({
    // Tell TS the query argument is void and return type is any (or type your event)
    getEvents: builder.query<any, void>({
      query: () => "/events?populate=*",
    }),
    
    getTeams: builder.query<any, void>({
      query: () => "/teams?populate=*",
    }),
  }),
});

export const { useGetEventsQuery, useGetTeamsQuery } = strapiApi;