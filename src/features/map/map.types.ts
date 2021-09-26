// Add all your feature's interfaces and types
export interface Map {}

export interface ICategory {
  name: string;
  selected: boolean;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  name: string;
  companies: ICompany[];
}

export interface ICompany {
  name: string;
  category: string;
  total_funding: number | string;
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

export type Funding = "$0-$10M" | "$10M-$30M" | "$30M-$50M" | "$50M+";
export interface FundingOption {
  name: Funding;
  selected: boolean;
}

export interface isBoxProp {
  isBox?: boolean;
}
