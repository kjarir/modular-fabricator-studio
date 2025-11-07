export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  specifications?: string[];
}

// Product categories are now dynamic and stored in state
// Initial categories for seeding
export const initialProductCategories = [
  "All Products",
  "Ball Valves",
  "Needle Valves",
  "Check Valves",
  "Pipe Fittings",
  "Double Ferrule Fittings",
  "JIC Fittings",
  "Autoclave Fittings",
  "Manifold Valves",
] as const;
