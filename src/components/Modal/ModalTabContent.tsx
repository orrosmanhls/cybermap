import React from "react";

import { theme } from "../../styles/themes/theme";
import {
  TabContentContainer,
  SubTitle,
  Paragraph,
  Mail,
  FooterLink,
  Title,
} from "./styles";

interface Props {
  tab: "about" | "add";
}

const ModalTabContent: React.FC<Props> = ({ tab }) => {
  return (
    <TabContentContainer>
      {tab === "about" && (
        <>
          <SubTitle component={"h3"}>What is CyberMap?</SubTitle>
          <Paragraph
            weight={theme.typography.fontWeights.medium}
            component={"p"}
          >
            CyberMap, by YL Ventures, is the first live map of Israel’s
            cybersecurity startup landscape. It was designed by the firm for
            internal use and later published to share its potential with the
            wider public.
          </Paragraph>
          <Paragraph
            weight={theme.typography.fontWeights.medium}
            component={"p"}
          >
            Today, CyberMap enables anyone interested in Israel’s startup
            cybersecurity industry, including entrepreneurs, investors,
            journalists, and CISOs, as well as other security practitioners, to
            explore its full ecosystem with ease and efficiency.
          </Paragraph>
          <Paragraph
            weight={theme.typography.fontWeights.medium}
            component={"p"}
          >
            CyberMap encompasses the full scope of Israel’s cybersecurity
            industry. For ease of use, its search function offers filtering
            tools for 30 cyber categories and funding ranges to help you find
            the exact company you are looking for.
          </Paragraph>
          <SubTitle component={"h3"}>Tell us your thoughts!</SubTitle>
          <Paragraph
            weight={theme.typography.fontWeights.medium}
            component={"p"}
          >
            We made this live map to help our industry grow. If you have any
            questions, comments, or ideas on how to improve this map, we would
            love to hear them! We invite you to get in touch with us at{" "}
            <Mail href={"mailto:dana@ylventures.com"}>dana@ylventures.com</Mail>
          </Paragraph>
          <SubTitle component={"h3"}>About YL Ventures</SubTitle>
          <Paragraph
            weight={theme.typography.fontWeights.medium}
            component={"p"}
          >
            YL Ventures funds and supports brilliant Israeli tech entrepreneurs
            from seed to lead. Based in Silicon Valley and Tel Aviv, YL Ventures
            manages over $300 million and exclusively invests in cybersecurity.
            YL Ventures accelerates the evolution of portfolio companies via
            strategic advice and U.S. - based operational execution, leveraging
            a powerful network of Chief Information Security Officers and global
            industry leaders. The firm's track record includes successful,
            high-profile portfolio company acquisitions by major corporations
            including Palo Alto Networks, Microsoft, CA, and Proofpoint.
          </Paragraph>
          <FooterLink href="https://www.ylventures.com" target="_blank">
            www.ylventures.com
          </FooterLink>
        </>
      )}
      {tab === "add" && (
        <>
          <Title component={"h1"}>Add a company</Title>
          <Paragraph
            weight={theme.typography.fontWeights.medium}
            component={"p"}
          >
            Want to appear on the map? Please send an email with your company’s
            name, website and logo (png or svg) to{" "}
            <Mail href={"mailto:dana@ylventures.com"}>dana@ylventures.com</Mail>
          </Paragraph>
        </>
      )}
    </TabContentContainer>
  );
};

export default ModalTabContent;
