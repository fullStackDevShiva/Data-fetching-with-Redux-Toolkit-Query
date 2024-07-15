export interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

export interface ProductData {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

// export interface ListResponse<T> {
//   page: number;
//   limit: number;
//   total: number;
//   data: T[];
// }
