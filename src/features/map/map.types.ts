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

export interface IOption {
  name: string;
  selected: boolean;
}

export interface Subcategories {
  [propName: string]: Company[];
}

export interface GroupedCategories {
  [propName: string]: Subcategories;
}
