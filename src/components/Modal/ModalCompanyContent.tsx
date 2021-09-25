import React, { useEffect, useState } from "react";
import { Timeline } from "react-twitter-widgets";

import { companies } from "../../data.json";
import { theme } from "../../styles/themes/theme";
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

interface Props {
  company: string;
}

const ModalCompanyContent: React.FC<Props> = ({ company }) => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const companyObject = companies.find(
      (companyItem) => companyItem.name === company
    );
    setCompanyData(companyObject);
  }, [company]);

  return companyData ? (
    <>
      <CompanyLogo src={companyData.logo} />
      <CompanyInfo>
        <CompanyName component={"h1"}>{companyData.name}</CompanyName>
        <CompanyCategory>{companyData.category}</CompanyCategory>
        <Paragraph weight={theme.typography.fontWeights.regular}>
          {companyData.description}
        </Paragraph>
        <CompanyFunding component={"h4"}>
          Total Funding: ${companyData.total_funding}M
        </CompanyFunding>
      </CompanyInfo>
      <CompanySocialWrapper>
        <SocialIcon type={"website"} link={companyData.homepage} />
        <SocialIcon type={"crunchbase"} link={companyData.crunchbase} />
        <SocialIcon type={"linkedin"} link={companyData.linkedin} />
        <SocialIcon type={"twitter"} link={companyData.twitter} />
      </CompanySocialWrapper>
      {companyData.twitter && (
        <TwitterWrapper>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: new URL(companyData.twitter).pathname.slice(1),
            }}
            options={{
              width: "2000",
            }}
          />
        </TwitterWrapper>
      )}
    </>
  ) : null;
};

export default ModalCompanyContent;
