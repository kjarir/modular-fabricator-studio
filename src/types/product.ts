export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  specifications?: string[];
}

export const productCategories = [
  "All Products",
  "Ferrules & Caps",
  "Unions & Connectors",
  "Elbows & Tees",
  "Adapters & Closures",
] as const;

export type ProductCategory = typeof productCategories[number];
