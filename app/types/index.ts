export type Category = 'All' | 'Shop Buildings' | 'Housing';

export interface Property {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet: number;
}

export interface FilterState {
  category: Category;
}
