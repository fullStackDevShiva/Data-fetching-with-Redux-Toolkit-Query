import { useGetPaginatedListQuery } from "../redux/features/apiSlice";
import { useState } from "react";
import { Product } from "../types/productTypes";
import ProductCardSm from "./ProductCardSm";

const PaginatedList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetPaginatedListQuery(page); // Query to fetch 8 products per page

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  console.dir(data);

  // Total pages = total items / items per page
  const total_pages: number = Math.ceil(data?.total / data?.limit);

  return (
    <div className="product-container">
      <p className="text-left">Page {`${page} of ${total_pages}`}</p>

      {data && data.products?.length > 0 && (
        <div className="product-list w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-4">
          {data.products.map((product: Product) => {
            // using ProductCardSm component to display a single product and iterate
            return <ProductCardSm product={product} key={product.id} />;
          })}
        </div>
      )}

      <div className="pagination-btn mt-4">
        <button
          className="btn btn-small btn-green-outline m-1"
          disabled={page <= 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Prev
        </button>
        <button
          className="btn btn-small btn-green-outline m-1"
          disabled={
            page === total_pages && data?.products?.length <= data?.limit
          }
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
