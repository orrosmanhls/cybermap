import styled from "styled-components";
import { CloseSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Typography from "../Typography/Typography";

interface ParagraphProps {
  weight: number;
}

// Modal.tsx

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  position: relative;
  height: 60vh;
  width: 80vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow-y: scroll;

  // box-sizing
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
`;

export const ExitContainer = styled.span`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;
export const Exit = styled(CloseSharp)`
  position: absolute;
  right: 1rem;
  top: 1em;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary.dark};
  cursor: pointer;
`;

// ModalTabContent.tsx

export const TabContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled(Typography)`
  color: #00bec1;
  margin: 0 auto 1rem;
  font-weight: ${(props) => props.theme.typography.fontWeights.regular};
`;

export const SubTitle = styled(Typography)`
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  font-size: ${(props) => props.theme.typography.fontSizes.small};
  margin: 0.5rem 0;
`;

export const Paragraph = styled(Typography)<ParagraphProps>`
  margin: 0.5rem 0;
  font-weight: ${(props) => props.weight};
  line-height: 1.25rem;
`;

export const Mail = styled.a`
  color: #039be5;
  cursor: pointer;
  text-decoration: none;
  margin: 0 0.25em;
`;

export const FooterLink = styled.a`
  color: #00bec1;
  margin: 0.5rem auto;
  cursor: pointer;
  text-decoration: none;
`;

// ModalCompanyContent.tsx

export const CompanyLogo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0 auto;
`;

export const CompanyInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export const CompanyName = styled(Typography)`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  margin-bottom: 0.5rem;
`;

export const CompanyCategory = styled.div`
  color: #00bec1;
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const CompanyFunding = styled(Typography)`
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  margin: 0.5rem 0 1rem;
`;

export const CompanySocialWrapper = styled.div`
  display: flex;
  padding: 1.5rem 0;
`;

export const TwitterWrapper = styled.div`
  padding: 0 15%;
`;
