
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ACCES_KEY = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/photos/' }),
  endpoints: (builder) => ({
    getImages: builder.query({
      query: (page) => `?page=${page}&per_page=12&client_id=${ACCES_KEY}`,
    }),
  }),
})

export const { useGetImagesQuery } = imagesApi