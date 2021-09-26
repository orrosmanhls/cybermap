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
  isBox: boolean;
}

const Subcategory: React.FC<Props> = ({
  name,
  companies,
  categoryName,
  isBox,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOpen((prevState) => !prevState);
  };

  return companies.length > 0 ? (
    <Section data-testid="subcategory" direction={"column"}>
      <Container isBox={isBox}>
        <CategoryHeader isBox={isBox}>
          <Title onClick={toggleCategory} isBox={isBox}>
            <CategoryTitle>{categoryName}</CategoryTitle>
            {name !== "none" && (
              <SubcategoryTitle isBox={isBox}>{name}</SubcategoryTitle>
            )}
            {!isBox && (isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />)}
            {isBox && (
              <TotalCompanies isBox={isBox}>
                {companies.length}{" "}
                {companies.length === 1 ? "company" : "companies"}
              </TotalCompanies>
            )}
          </Title>
          {!isBox && (
            <TotalCompanies>
              {companies.length}{" "}
              {companies.length === 1 ? "company" : "companies"}
            </TotalCompanies>
          )}
        </CategoryHeader>
        {isOpen && (
          <CompaniesContainer>
            {companies.map((company) => (
              <CompanyCard key={company.name} company={company} isBox={isBox} />
            ))}
          </CompaniesContainer>
        )}
      </Container>
    </Section>
  ) : null;
};

export default Subcategory;
