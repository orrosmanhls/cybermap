// Add all utils, parses and validations.

import { IOption, ICompany, ISubcategory } from "./map.types";

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
  categories: IOption[],
  categoriesFilter: IOption[]
) => {
  const result = categoriesFilter.filter((category) => category.selected);
  return result;
};

const filterByFunding = (categories: IOption[], fundingFilters: IOption[]) => {
  const newCategories = categories.map((category) => {
    const newCategory = category.subcategories.map(
      (subcategory: ISubcategory) => ({
        ...subcategory,
        companies: subcategory.companies.filter((company: ICompany) =>
          isWithinFunding(company.total_funding, fundingFilters)
        ),
      })
    );
    return newCategory;
  });
  return newCategories;
  // setFilteredCompanies(companies.filter(company => (
  //   company.name.includes(textFilters) && isWithinFunding(company.total_funding, fundingFilters)
  // )))
};

export { debounce, filterByCategory, filterByFunding, isWithinFunding };
