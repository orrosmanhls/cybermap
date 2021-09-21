import React, { useEffect, useState } from "react";
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import { companies } from "../../data.json";
import { theme } from "../../styles/themes/theme";
import SocialIcon from "../SocialIcon/SocialIcon";
import {
  Container,
  CompanyLogo,
  CompanyInfo,
  CompanyName,
  CompanyCategory,
  Paragraph,
  CompanyFunding,
  CompanySocialWrapper,
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
  }, []);

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
      {/* <TwitterTimelineEmbed id={companyData.twitter}
                            options={{
                              height: 600,
                              width: 600
                            }}
      /> */}
    </>
  ) : null;
};

export default ModalCompanyContent;
