import { useGetInfiniteListQuery } from "../redux/features/apiSlice";
import { useEffect, useState } from "react";
import { Product } from "../types/productTypes";
import ProductCardSm from "./ProductCardSm";

function InfiniteList() {
  const [page, setPage] = useState(1);
  const { data, isFetching, isError, isLoading } =
    useGetInfiniteListQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight;

      if (
        scrolledToBottom &&
        !isFetching &&
        data?.products?.length < data?.total
      ) {
        console.log("Fetching more data...");
        setPage((page) => page + 1);
      }
    };
    document.addEventListener("scroll", onScroll);
    console.log("page: ", page);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching, data?.total, data?.products?.length]);

  // console.log printing data and also [object object] which can be avoided by using console.dir()
  // console.dir(data);

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  // Total pages = total items / items per page
  const total_pages: number = Math.ceil(data?.total / data?.limit);

  return (
    <div className="product-container">
      {data && data?.products?.length > 0 && (
        <>
          <p className="text-left">
            {data.products.length}/{data.total} items - scroll down or click
            Load More button
          </p>
          <div className="product-list w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-4">
            {data.products.map((product: Product) => {
              // using ProductCardSm component to display a single product and iterate
              return <ProductCardSm product={product} key={product.id} />;
            })}
          </div>
        </>
      )}

      <div className="load-btn mt-4">
        <button
          className="btn btn-small btn-green-outline m-1"
          disabled={
            page === total_pages && data?.products?.length <= data?.limit
          }
          onClick={() => setPage((page) => page + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default InfiniteList;
