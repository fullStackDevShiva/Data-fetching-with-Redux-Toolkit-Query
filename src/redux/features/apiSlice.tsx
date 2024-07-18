import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductData } from "../../types/productTypes";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["AllProductsCache", "PaginatedCache", "InfiniteCache"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductData, void>({
      // regular query as per dummyjson API, limit=0 to fetch all products
      query: () => "/products?limit=0",
      providesTags: ["AllProductsCache"],
    }),

    getPaginatedList: builder.query<ProductData, number | void>({
      // query for paginated list as per dummyjson API, skip number is required
      query: (page) => `/products?page=${page}&limit=8&skip=${(page - 1) * 8}`,
      providesTags: ["PaginatedCache"],
    }),
    getInfiniteList: builder.query<ProductData, number | void>({
      // query for paginated list as per dummyjson API, skip number is required
      query: (page) => `/products?page=${page}&limit=8&skip=${(page - 1) * 8}`,

      // to have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      // to merge incoming data to the cache entry
      merge: (currentCache, newItems, { arg }) => {
        if (arg === 1) {
          return newItems;
        }
        currentCache.products.push(...newItems.products);
      },

      // to refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ["InfiniteCache"],
    }),
    getProduct: builder.query<Product, number>({
      // get product by id query as per dummyjson API
      query: (id) => `products/${id}`,
    }),
  }),
});

// auto-generated hooks based on the defined endpoints
// to avoid type error we can just export the productsAPi only and then import the required hooks through the productsApi from the components
export const {
  useGetAllProductsQuery,
  useGetPaginatedListQuery,
  useGetInfiniteListQuery,
  useGetProductQuery,
} = productsApi;
