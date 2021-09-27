import React from "react";
import { Timeline } from "react-twitter-widgets";

import { theme } from "../../styles/themes/theme";
import { isValidUrl } from "../../features/map/map.utils";
import SocialIcon from "../SocialIcon/SocialIcon";
import {
  CompanyLogo,
  CompanyInfo,
  CompanyName,
  CompanyCategory,
  Paragraph,
  CompanyFunding,
  CompanySocialWrapper,
  TwitterWrapper,
} from "./styles";
import { ICompany } from "../../features/map/map.types";

interface Props {
  company: ICompany;
}

const ModalCompanyContent: React.FC<Props> = ({ company }) => {
  return (
    <>
      <CompanyLogo src={company.logo} />
      <CompanyInfo>
        <CompanyName component={"h1"}>{company.name}</CompanyName>
        <CompanyCategory>{company.category}</CompanyCategory>
        <Paragraph weight={theme.typography.fontWeights.regular}>
          {company.description}
        </Paragraph>
        <CompanyFunding component={"h4"}>
          Total Funding:{" "}
          {company.total_funding === "N/A"
            ? "N/A"
            : `$${company.total_funding}M`}
        </CompanyFunding>
      </CompanyInfo>
      <CompanySocialWrapper>
        <SocialIcon type={"website"} link={company.homepage} />
        <SocialIcon type={"crunchbase"} link={company.crunchbase} />
        <SocialIcon type={"linkedin"} link={company.linkedin} />
        <SocialIcon type={"twitter"} link={company.twitter} />
      </CompanySocialWrapper>
      {isValidUrl(company.twitter) && (
        <TwitterWrapper>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: new URL(company.twitter).pathname.slice(1),
            }}
            options={{
              width: "2000",
            }}
          />
        </TwitterWrapper>
      )}
    </>
  );
};

export default ModalCompanyContent;
