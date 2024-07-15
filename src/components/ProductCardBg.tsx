import { useNavigate } from "react-router-dom";
import { Product } from "../types/productTypes";
import Rating from "./Rating";

// Large card component to display a single product
const ProductCardBg = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-auto mb-2">
      <div className="card-left h-full w-1/3 items-center p-2">
        <img
          src="../product1.jpeg"
          alt="img"
          className="object-cover w-full h-full relative self-center bg-white rounded-xl"
        />
      </div>
      <div className="card-right h-full w-2/3 p-4 items-center text-left">
        <div className="product-title mb-2">
          <p className="text-slate-900 font-bold text-2xl">
            #{product.brand}-{product.title} - {product.stock} in stock -{" "}
            {product.category} category
          </p>
        </div>
        <div className="star-rating mb-4">
          <Rating rating={product.rating} />
        </div>
        <div className="product-description mb-2">
          <p className="text-slate-900 text-base overflow-hidden">
            {product.description}
          </p>
        </div>
        <div className="product-price mb-4">
          <p className="text-slate-900 font-bold text-xl">
            Now Price: ${product.price}{" "}
            <span className="badge-orange text-base ml-4">
              {product?.discountPercentage >= 1
                ? // ? `${Math.round(product.discountPercentage)}% discount`
                  `${Math.ceil(product.discountPercentage / 5) * 5}% discount` // rounded off to the next multiple of 5 to make it look good
                : "fixed price"}
            </span>
          </p>
        </div>
        <div className="product-btns">
          <button
            className="btn btn-small btn-blue-outline mr-2"
            onClick={() => navigate("/")}
          >
            Go back
          </button>
          <button className="btn btn-small btn-green-outline ml-2" disabled>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBg;
