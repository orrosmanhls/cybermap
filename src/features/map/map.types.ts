// Add all your feature's interfaces and types
export interface Map {}

export interface Company {
  name: string;
  category: string;
  total_funding: number;
  last_fundraising_date: string;
  description: string;
  crunchbase: string;
  homepage: string;
  twitter: string;
  linkedin: string;
  subcategory: string;
  logo: string;
}

export type SubCategory = Company[];

export interface Subcategories {
  [propName: string]: SubCategory;
}

export interface Category {
  name: string;
  selected: boolean;
  value: Subcategories;
}

export interface IOption {
  name: string;
  selected: boolean;
  [propName: string]: any;
}

export interface GroupedCategories {
  [propName: string]: Subcategories;
}
