import { HelpOutline } from "@material-ui/icons";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #15181b;
  min-height: 100vh;
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const HelpIcon = styled(HelpOutline)`
  margin: ${(props) => props.theme.spacing(1)};
  cursor: text;
`;
