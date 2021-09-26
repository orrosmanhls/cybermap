import React from "react";
import { useModalUpdate } from "../../../../contexts/ModalContext";
import { ICompany } from "../../map.types";
import { Card, LogoContainer, CompanyLogo, CompanyName } from "./styles";

interface Props {
  company: ICompany;
  isBox: boolean;
}

const CompanyCard: React.FC<Props> = ({ company, isBox }) => {
  const { updateModalType, toggleModal } = useModalUpdate();

  const onCardClicked: React.MouseEventHandler<HTMLDivElement> = (e) => {
    updateModalType({
      type: "company",
      company: company.name,
    });
    toggleModal();
  };

  return (
    <Card data-testid="company-card" onClick={onCardClicked} isBox={isBox}>
      <LogoContainer>
        <CompanyLogo src={company.logo} />
      </LogoContainer>
      {!isBox && <CompanyName>{company.name}</CompanyName>}
    </Card>
  );
};

export default CompanyCard;
