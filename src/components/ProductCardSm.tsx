import { Link } from "react-router-dom";
import { Product } from "../types/productTypes";
import Rating from "./Rating";

// Small square shaped card component to display a single product
const ProductCardSm = ({ product }: { product: Product }) => {
  return (
    <div className="card flex flex-col text-center items-center">
      <div className="card-top w-full items-center h-3/6 mb-2">
        <img
          src="product1.jpeg"
          alt="img"
          className="object-cover w-full h-full relative self-center bg-white rounded-xl"
        />
      </div>
      <div className="card-middle w-full h-1/6 mb-2 items-center text-center overflow-hidden">
        <p className="text-slate-900 font-bold text-base overflow-hidden">
          #{product.title} -{" "}
          {product?.discountPercentage >= 1
            ? // ? `${Math.round(product.discountPercentage)}% discount`
              `${Math.ceil(product.discountPercentage / 5) * 5}% discount` // rounded off to the next multiple of 5 to make it look good
            : "fixed price"}{" "}
          - {product.stock} left only
        </p>
      </div>
      <div className="card-bottom w-full flex justify-evenly items-center h-1/6">
        <Rating rating={product.rating} />
      </div>
      <div className="card-bottom w-full flex justify-evenly items-center h-1/6">
        <p className="badge-orange">Now ${product.price}</p>
        <Link to={`/products/${product.id}`} className="badge-blue px-4">
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCardSm;
