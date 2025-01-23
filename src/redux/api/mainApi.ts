import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com"}),

  endpoints: (builder) => ({
    getUsersList: builder.query({
        query: () => `/users`,
      }),
   
  }),
});

export const { useGetUsersListQuery } = mainApi;
