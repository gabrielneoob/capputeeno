export interface ProductProps {
  id: string;
  name: string;
  price_in_cents: number;
  image_url: string;
  category: "t-shirts" | "mugs";
  description?: string;
}

export interface ProductsFetchResponse {
  data: {
    allProducts: ProductProps[];
  };
}

export interface ProductFetchResponse {
  data: {
    Product: ProductProps;
  };
}
