import styled from "styled-components";
import { LanguageSharp } from "@material-ui/icons";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #00bec1;
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary.main};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
`;

export const Website = styled(LanguageSharp)`
  color: ${(props) => props.theme.colors.secondary.main};
  font-size: 1.5rem;
`;

export const Crunchbase = styled.p`
  color: ${(props) => props.theme.colors.secondary.main};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
`;

export const LinkedIn = styled(TiSocialLinkedin)`
  color: ${(props) => props.theme.colors.secondary.main};
  font-size: 1.5rem;
`;

export const Twitter = styled(TiSocialTwitter)`
  color: ${(props) => props.theme.colors.secondary.main};
  font-size: 1.5rem;
`;
