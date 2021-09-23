// Add all your feature's interfaces and types
export interface Map {}

export interface GroupedCategories {
  [propName: string]: Category;
}

export interface Category {
  subcategories: Subcategories;
  length: number;
}

export interface Subcategories {
  [propName: string]: SubCategory;
}

export interface SubCategory {
  companies: Company[];
  length: number;
}

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

export interface IOption {
  name: string;
  selected: boolean;
  [propName: string]: any;
}
