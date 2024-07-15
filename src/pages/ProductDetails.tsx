import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/features/apiSlice";
import ProductCardBg from "../components/ProductCardBg";
// import { productsApi } from "../redux/features/apiSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductQuery(id, {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  //to avoid type error - alternatively we can use the useQuery hook from productsApi like this
  // const { data: product, isLoading } =
  //   productsApi.endpoints.getProduct.useQuery(id, {
  //     pollingInterval: 3000,
  //     refetchOnMountOrArgChange: true,
  //     skip: false,
  //   });

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Missing product!</div>;

  return (
    <>
      {product ? (
        <div className="card post-details">
          <ProductCardBg product={product} />
          <hr />
          <div className="flex h-80 w-full justify-center p-4">
            <h4 className="text-slate-900">
              *** Skipped - More data can be displayed here ***
            </h4>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;
