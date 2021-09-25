import React, { useState } from "react";
import Section from "../../../../components/Section/Section";
import CompanyCard from "../CompanyCard/CompanyCard";
import { ICompany } from "../../map.types";

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
} from "./styles";

interface Props {
  name: string;
  companies: ICompany[];
  categoryName: string;
}

const Subcategory: React.FC<Props> = ({ name, companies, categoryName }) => {
  const [isOpen, setIsOpen] = useState(true);

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
            {companies.length}{" "}
            {companies.length === 1 ? "company" : "companies"}
          </TotalCompanies>
        </CategoryHeader>
        {isOpen && (
          <CompaniesContainer>
            {companies.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </CompaniesContainer>
        )}
      </Container>
    </Section>
  ) : null;
};

export default Subcategory;
