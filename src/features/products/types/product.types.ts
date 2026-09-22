export type ProductId = string;

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
  defaultValue?: string;
};

export type ProductScentAnatomy = {
  story: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
};

export type Product = {
  id: ProductId;
  name: string;
  description: string;
  notes: string;
  price: number;
  images: string[];
  category: string;
  scentFamily: string;
  occasion: string;
  options: ProductOption[];
  volumePrices?: Record<string, number>;
  scentAnatomy?: ProductScentAnatomy;
  availableInAtelier?: boolean;
};

export type ProductSort =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc";

export type ProductListQuery = {
  search?: string;
  category?: string;
  sort?: ProductSort;
  page?: number;
  pageSize?: number;
};

export type ProductListResult = {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
};

export type ProductSearchParams = Record<
  string,
  string | string[] | undefined
>;
