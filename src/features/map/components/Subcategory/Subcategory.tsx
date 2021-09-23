import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Section from "../../../../components/Section/Section";
import { Company } from "../../map.types";
import CompanyCard from "../CompanyCard/CompanyCard";

import {
  Container,
  CategoryHeader,
  Title,
  CategoryTitle,
  SubcategoryTitle,
  ArrowDownIcon,
  ArrowUpIcon,
  TotalCompanies,
  CompaniesContainer,
  CompanyTag,
} from "./styles";

interface Props {
  name: string;
  companies: Company[];
  categoryName: string;
}

const Subcategory: React.FC<Props> = ({ name, companies, categoryName }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const toggleCategory: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen((prevState) => !prevState);
  };

  return companies.length > 0 ? (
    <Section data-testid="subcategory" direction={"column"}>
      <Container>
        <CategoryHeader>
          <Title onClick={toggleCategory}>
            <CategoryTitle>{categoryName}</CategoryTitle>
            {name !== "none" && <SubcategoryTitle>{name}</SubcategoryTitle>}
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Title>
          <TotalCompanies>
            {filteredCompanies.length}{" "}
            {filteredCompanies.length === 1 ? "company" : "companies"}
          </TotalCompanies>
        </CategoryHeader>
        {isOpen && (
          <CompaniesContainer>
            {companies.map((company) => (
              <CompanyCard company={company} />
            ))}
          </CompaniesContainer>
        )}
      </Container>
    </Section>
  ) : null;
};

export default Subcategory;
