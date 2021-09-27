// Add all utils, parses and validations.
import { IOption, ICompany, ISubcategory, ICategory } from "./map.types";

const debounce = (func: (...args: any) => any, wait: number) => {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: any) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const convertToRange = (fundingFilter: string) => {
  switch (fundingFilter) {
    case "$0-$10M":
      return { from: 0, to: 10 };

    case "$10M-$30M":
      return { from: 10, to: 30 };

    case "$30M-$50M":
      return { from: 30, to: 50 };

    case "$50M+":
      return { from: 50, to: null };

    default:
      console.error("Funding filter value is invalid!");
  }
};

const isWithinFunding = (
  total_funding: number | string,
  fundingFilters: IOption[]
) => {
  if (total_funding === "N/A") return true;
  const result = fundingFilters.some((fundingFilter) => {
    const range = convertToRange(fundingFilter.name);
    return range.from <= total_funding && total_funding < range.to;
  });

  return result;
};

const filterByCategory = (
  categories: ICategory[],
  categoriesFilter: IOption[]
) => {
  if (categoriesFilter.length === 0) return categories;
  return categoriesFilter.filter(
    (category) => category.selected
  ) as ICategory[];
};

const filterByFunding = (
  categories: ICategory[],
  fundingFilters: IOption[]
): ICategory[] => {
  if (fundingFilters.length === 0) return categories;
  const newCategories: ICategory[] = categories.map((category) => {
    const newCategory: ICategory = {
      ...category,
      subcategories: category.subcategories.map(
        (subcategory: ISubcategory) => ({
          ...subcategory,
          companies: subcategory.companies.filter((company: ICompany) =>
            isWithinFunding(company.total_funding, fundingFilters)
          ),
        })
      ),
    };

    return newCategory;
  });
  return newCategories;
};

const filterByText = (categories: ICategory[], query: string) => {
  if (query === "") return categories;
  const newCategories: ICategory[] = categories.map((category) => {
    const newCategory: ICategory = {
      ...category,
      subcategories: category.subcategories.map(
        (subcategory: ISubcategory) => ({
          ...subcategory,
          companies: subcategory.companies.filter((company: ICompany) =>
            company.name.toUpperCase().includes(query.toUpperCase())
          ),
        })
      ),
    };

    return newCategory;
  });
  return newCategories;
};

const sortAlphabetically = (categories: ICategory[]) => {
  return categories.sort((a, b) => a.name.localeCompare(b.name));
};

const isValidUrl = (string: string) => {
  try {
    new URL(string);
  } catch (error) {
    return false;
  }
  return true;
};

export {
  debounce,
  filterByCategory,
  filterByFunding,
  filterByText,
  isWithinFunding,
  isValidUrl,
  sortAlphabetically,
};
