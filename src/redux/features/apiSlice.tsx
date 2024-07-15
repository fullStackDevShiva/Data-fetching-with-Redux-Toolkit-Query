import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductData } from "../../types/productTypes";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductData, void>({
      query: () => "/products?limit=0", //as per dummyjson API, limit=0 to fetch all products
      providesTags: ["Product"],
    }),

    getPaginatedProducts: builder.query<ProductData, number | void>({
      query: (page = 1) =>
        `/products?page=${page}&limit=8&skip=${(page - 1) * 8}`, //as per dummyjson API, skip number is for pagination
      providesTags: ["Product"],
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

// auto-generated hooks based on the defined endpoints
// to avoid type error we can just export the productsAPi only and then import the required hooks through the productsApi from the compoenents
export const {
  useGetAllProductsQuery,
  useGetPaginatedProductsQuery,
  useGetProductQuery,
} = productsApi;
