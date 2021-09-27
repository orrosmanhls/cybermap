import styled from "styled-components";
import Typography from "../../../../components/Typography/Typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Typography).attrs((props) => ({
  component: "h1",
}))`
  margin: 3rem 0 1.5rem;
  font-weight: ${(props) => props.theme.typography.fontWeights.regular};
`;

export const Subtitle = styled(Typography)`
  width: 70%;
  margin-bottom: 32px;
  line-height: 1.5rem;
  font-weight: 500;
  word-spacing: 0.25rem;
`;
