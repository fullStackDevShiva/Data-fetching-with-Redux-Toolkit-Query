import { useGetAllProductsQuery } from "../redux/features/apiSlice";
import { Product } from "../types/productTypes";
import ProductCardSm from "./ProductCardSm";
// import { productsApi } from "../redux/features/apiSlice";

const BasicList = () => {
  // Query to fetch all the products
  const { data, isLoading, isError } = useGetAllProductsQuery();

  //to avoid type error - alternatively we can use the useQuery hook from productsApi like this
  // const { data, isLoading, isError } =
  //   productsApi.endpoints.getAllProducts.useQuery();

  if (isError) return <div>An error has occurred!</div>;
  if (isLoading) return <div>Loading...</div>;

  console.dir(data);

  return (
    <div className="product-container w-full">
      <p className="text-left">Total products: {data?.total}</p>

      {data && data.products?.length > 0 && (
        <div className="product-list w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-4">
          {data.products.map((product: Product) => {
            // using ProductCardSm component to display a single product and iterate
            return <ProductCardSm product={product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BasicList;
